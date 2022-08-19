<template>
  <div id="album-list-table-container" v-show="this.isLoaded">
    <AlbumList />
  </div>
  <div id="loading-screen-container" v-show="!this.isLoaded">
    <LoadingScreen />
  </div>
</template>

<script>
import AlbumList from './components/AlbumList.vue'
import LoadingScreen from './components/LoadingScreen.vue'

import { useAlbumStore } from '@/stores/albumstore'

export default {
  name: 'App',
  components: {
    AlbumList,
    LoadingScreen
  },
  data() {
    return {
      isLoaded: false
    }
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
  async mounted() {
    this.isLoaded = false
    await fetch('http://localhost:8000/api/getalbums')
      .then((res) => res.json())
      .then((data) => {
        if(data['message'] == 'success') {
          this.albumStore.albums = data['data']
          this.albumStore.success = true
        } else {
          this.albumStore.albums = []
          this.albumStore.success = false
        }
      })
      .catch((err) => console.log(err.message))
    this.isLoaded = true
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

#loading-screen-container {
  height: 90vh;
  width: 80vw;
  min-width: 800px;
  overflow: auto;
  margin: auto;
  justify-content: center;
  align-items: flex-start;
  display: flex;
}
</style>
