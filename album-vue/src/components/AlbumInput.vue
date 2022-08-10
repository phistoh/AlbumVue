<template>
    <form id="new-album-entry" @submit.prevent="onSubmit">
    <div class="flex-horizontal">
        <input type="text" placeholder="Artist" id="artist-input" name="artist-string" v-model="artist">
		<input type="text" placeholder="Album" id="album-input" name="album-string" v-model="album">

        <div class="radio-form">
			<input type="radio" id="media-type-cd" name="media-type" value="CD" v-model="mediatype" checked>
			<label for="media-type-cd">CD</label>
			
			<input type="radio" id="media-type-digital" name="media-type" value="Digital" v-model="mediatype">
			<label for="media-type-digital">Digital</label>
			
			<input type="radio" id="media-type-vinyl" name="media-type" value="Vinyl" v-model="mediatype">
			<label for="media-type-vinyl">Vinyl</label>

            <input type="radio" id="media-type-tape" name="media-type" value="Tape" v-model="mediatype">
			<label for="media-type-tape">Tape</label>
		</div>
    </div>

    <div class="flex-horizontal">
		<button id="save-button" :disabled="this.artist === '' || this.album === '' || this.mediatype === ''">Speichern</button>
	</div>
    </form>
</template>

<script>
export default {
  name: 'AlbumInput',
  data() {
    return {
        artist: '',
        album: '',
        mediatype: 'cd'
    }
  },
  methods: {
    onSubmit() {
        if(this.artist === '' || this.album === '' || this.mediatype === ''){
            alert("Felder dürfen nicht leer sein.")
            return
        }

        // media type lowercase?

        let newAlbum = {
            artist: this.artist,
            album: this.album,
            mediatype: this.mediatype.toLowerCase()
        }

        this.$emit('new-album-submitted', newAlbum)

        this.artist = ''
        this.album = ''
        this.mediatype = 'cd'
    }
  }
}
</script>

<style>
    .flex-horizontal {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-top: 8px;
        margin-bottom: 8px;
    }

    .radio-form {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 8px;
        height: 32px;
        width: 20vw;
        min-width: 220px;
        border: 1pt solid var(--divider);
        backdrop-filter: var(--backdrop-filter);
    }

    input[type=text] {
        width: 40vw;
        min-width: 320px;
        margin-right: 4px;
        outline: none;
        background: none;
        color: var(--normal);
        padding: 8px;
        border: 1pt solid var(--divider);
        backdrop-filter: var(--backdrop-filter);
    }

    input[type=text]:focus {
        border: 1px solid var(--highlight);
    }
</style>