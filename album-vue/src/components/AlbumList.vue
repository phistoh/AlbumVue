<template>
    <div>
      <AlbumStats :cd-amount=numCDs :digital-amount=numDigital :vinyl-amount=numVinyl :tape-amount=numTape @filter-input-changed="updateFilter" />
    </div>

    <table id="album-list-table">
      <thead>
          <th @click="sort('artist')">Artist<div class="arrow" v-if="currentSort == 'artist'" :class="sortAscending ? 'arrow-up' : 'arrow-down'"></div></th>
          <th @click="sort('album')">Album<div class="arrow" v-if="currentSort == 'album'" :class="sortAscending ? 'arrow-up' : 'arrow-down'"></div></th>
          <th class="th-small" @click="sort('mediatype')">Type<div class="arrow" v-if="currentSort == 'mediatype'" :class="sortAscending ? 'arrow-up' : 'arrow-down'"></div></th>
      </thead>
      <tbody>
          <tr v-for="(album, i) in sortedAlbums" :key="i" >
          <!-- <tr v-for="(album, i) in sortedAlbums" :key="i" @click="selectRow(i)" :class="this.selectedRow === i ? 'selected' : ''"> -->
              <td>{{album.artist}}</td>
              <td>{{album.album}}</td>
              <td class="td-center" v-if="album.mediatype.toLowerCase() == 'cd'">💿</td>
              <td class="td-center" v-else-if="album.mediatype.toLowerCase() == 'tape'">📼</td>
              <td class="td-center" v-else-if="album.mediatype.toLowerCase() == 'digital'">📁</td>
              <td class="td-center" v-else-if="album.mediatype.toLowerCase() == 'vinyl'">⚫️</td>
              <td class="td-center" v-else>{{album.mediatype}}</td>
          </tr>
      </tbody>
    </table>

    <div id="album-input-forms">
      <AlbumInput @new-album-submitted="addAlbum"/>
    </div>
</template>

<script>
import { useAlbumStore } from '@/stores/albumstore'
import AlbumInput from './AlbumInput.vue'
import AlbumStats from './AlbumStats.vue'

export default {
  name: 'AlbumList',
  components: {
      AlbumInput,
      AlbumStats
    },
    setup() {
      const albumStore = useAlbumStore()
      return {
        albumStore
      }
    },
  data() {
    return {
      currentSort: 'artist',
      sortAscending: true,
      selectedRow: null,
      currentSelection: {
        artist: '',
        album: '',
        mediatype: ''
      },
      filter: '',
      albums: this.albumStore['albums']
    }
  },
  methods: {
    sort:function(sortKey) {
      this.albums = this.sortedAlbums
      this.selectedRow = null
      // reverse sorting order if already sorted by sortKey
      if(sortKey === this.currentSort) {
        this.sortAscending = !this.sortAscending;
      }
      this.currentSort = sortKey;
    },
    addAlbum(newAlbum) {
      this.albumStore.addAlbumToDB(newAlbum)
    },
    selectRow(i){
      if(i == this.selectedRow) {
        this.selectedRow = null
        return
      }
      this.selectedRow = i;
      this.currentSelection = this.sortedAlbums[i]
    },
    updateFilter(filter) {
      this.filter = filter;
    }
  },
  computed: {
    sortedAlbums:function() {      
      // [...] to copy the array before sorting
      return [...this.albums].sort((a, b) => {
        let modifier = 1;
        if(!this.sortAscending) modifier = -1;
        if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      }).filter(x => x['artist'].toLowerCase().includes(this.filter.toLowerCase()) || x['album'].toLowerCase().includes(this.filter.toLowerCase()));
    },
    numCDs:function() {
      return this.albums.filter(x => x['artist'].toLowerCase().includes(this.filter.toLowerCase()) || x['album'].toLowerCase().includes(this.filter.toLowerCase())).filter(x => x.mediatype == 'cd').length
    },
    numDigital:function() {
      return this.albums.filter(x => x['artist'].toLowerCase().includes(this.filter.toLowerCase()) || x['album'].toLowerCase().includes(this.filter.toLowerCase())).filter(x => x.mediatype == 'digital').length
    },
    numVinyl:function() {
      return this.albums.filter(x => x['artist'].toLowerCase().includes(this.filter.toLowerCase()) || x['album'].toLowerCase().includes(this.filter.toLowerCase())).filter(x => x.mediatype == 'vinyl').length
    },
    numTape:function() {
      return this.albums.filter(x => x['artist'].toLowerCase().includes(this.filter.toLowerCase()) || x['album'].toLowerCase().includes(this.filter.toLowerCase())).filter(x => x.mediatype == 'tape').length
    }
  }
}
</script>

<style>
  table {
    height: 75%;
    width: 100%;
    /* margin-top: 10px;
    margin-bottom: 8px; */
    display: inline-block;
    overflow: auto;
    border-collapse: collapse;
    border: 1pt solid var(--divider);
    backdrop-filter: var(--backdrop-filter);
  }

  th {
    width: 40vw;
    min-width: 320px;
    text-align: center;
    background: var(--info);
    padding: 6px 0px 6px 0px;
    cursor: pointer;
    position: sticky;
    top: 0;
  }

  .th-small {
    width: 20vw;
    min-width: 160px;
  }

  th:hover {
    background-color: var(--highlight);
  }

  td {
    text-align: left;
    padding-left: 4px;
    max-width: 30px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    cursor: default;
  }

  .td-center {
    text-align: center;
  }

  tbody tr:hover {
    background-color: var(--highlight);
    color: var(--background);
  }

  #album-input-forms {
    width: 100%;
    margin: auto;
  }

  .selected {
    background-color: var(--info);
  }
</style>