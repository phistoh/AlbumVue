import { defineStore } from 'pinia'

export const useAlbumStore = defineStore('AlbumStore', {
    state: () => ({
        albums: [],
        success: false
    }),
    actions: {
        async addAlbumToDB(album){
            // fetch('http://localhost:8000/api/addalbum/', {
            //     method: 'POST',
            //     // body: 'artist='+album['artist']+'&album='+album['album']+'&mediatype='+album['mediatype']
            //     body: JSON.stringify({ artist: album['artist'], album: album['album'], mediatype: album['mediatype'] })
            // }).then((res) => console.log(res.json()))
            // .then(data => (this.postId = data.id));
            
            const requestOptions = {
                method: "POST",
                mode: "no-cors",
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(album)
            }

            // fetch('http://localhost:8000/api/addalbum/', requestOptions)
            // .then(response => response.json())
            // .then(data => console.log('Success:', data))
            // .catch(err => console.error('Error:', err.message))

            const res = await fetch('http://localhost:8000/api/addalbum/', requestOptions);
            const data = await res.json()
            console.log('Success:', data)
        }
    }
})