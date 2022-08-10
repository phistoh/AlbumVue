<template>
  <div id="album-list-table-container">
    <AlbumList />
  </div>
</template>

<script>
  import AlbumList from './components/AlbumList.vue'

  export default {
    name: 'App',
    components: {
      AlbumList
    },
    methods: {
        addAlbum(newAlbum) {
          return newAlbum
      }
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
