<template>
  <div id="album-list-table-container">
    <AlbumList />
  </div>
</template>

<script>
  import AlbumList from './components/AlbumList.vue'

  import { useAlbumStore } from '@/stores/albumstore'

  export default {
    name: 'App',
    components: {
      AlbumList
    },
    methods: {
        addAlbum(newAlbum) {
          return newAlbum
      }
    },
    setup() {
      const albumStore = useAlbumStore()
      return {
        albumStore
      }
    },
    mounted() {
      fetch('http://localhost:8000/api/getalbums')
        .then((res) => res.json())
        .then((data) => this.albumStore.albums = data['data'])
        .catch((err) => console.log(err.message))
    }
  }
</script>

<style>
  #album-list-table-container {
    height: 90vh;
    width: 80vw;
    min-width: 800px;
    overflow: auto;
    margin: auto;
  }
</style>
