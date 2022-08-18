import { defineStore } from 'pinia'

export const useAlbumStore = defineStore('AlbumStore', {
    state: () => ({
        albums: []
    }),
    actions: {
        addAlbumToDB(album){
            // fetch('http://localhost:8000/api/addalbum/', {
            //     method: 'POST',
            //     body: 'artist='+album['artist']+'&album='+album['album']+'&mediatype='+album['mediatype']
            // }).then((res) => console.log(res.json()))

            console.log(album)
        }
    }
})