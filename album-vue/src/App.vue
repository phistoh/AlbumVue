<template>
  <div id="album-list-table">
    <AlbumList/>
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
  #album-list-table {
    margin-top: 30px;
    height: 800px;
    width: 1200px;
    overflow: auto;
    margin: auto;
  }
</style>
