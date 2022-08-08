<script>
export default {
  data() {
    return {
      albums: [
            { artist: "A Forest Of Stars", album: "Grave Mounds and Grave Mistakes", mediatype: "cd" },
            { artist: "Casper", album: "Hinterland", mediatype: "cd" },
            { artist: "Black Kirin", album: "秦淮", mediatype: "digital" },
            { artist: "The Ruins of Beverast", album: "Exuvia", mediatype: "vinyl" },
            { artist: "Bring Me the Horizon", album: "Post Human: Survival Horror", mediatype: "tape" }
        ]
    }
  },
  methods: {
    sort() {

    }
  }
}
</script>

<template>
    <table>
    <thead>
        <th @click="sort('artist')">Artist</th>
        <th @click="sort('album')">Album</th>
        <th @click="sort('mediatype')">Type</th>
    </thead>
    <tbody>
        <tr v-for="album in albums" :key="album.id">
            <td>{{album.artist}}</td>
            <td>{{album.album}}</td>
            <td>{{album.mediatype}}</td>
        </tr>
    </tbody>
    </table>
</template>

<style>
</style>