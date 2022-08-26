import { defineStore } from 'pinia'

export const useAlbumStore = defineStore('AlbumStore', {
    state: () => ({
        albums: [],
        success: false
    }),
    actions: {
        async addAlbumToDB(album){
            const requestOptions = {
                method: "POST",
                // mode: "no-cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(album)
            }

            try {
                const response = await fetch('http://localhost:8000/api/addalbum/', requestOptions)
                const data = await response.text()
                console.log('Success:', data)
            } catch (error) {
                console.log(error);
            }
        }
    }
})