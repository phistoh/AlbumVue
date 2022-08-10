<template>
    <form id="new-album-entry" @submit.prevent="onSubmit">
    <div class="flex-horizontal">
        <input type="text" placeholder="Artist" id="artist-input" name="artist-string" v-model="artist">
		<input type="text" placeholder="Album" id="album-input" name="album-string" v-model="album">
    </div>

    <div class="flex-horizontal">
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
        align-items: center;
        margin-top: 12px;
    }

    .radio-form {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px;
        border: 1pt solid var(--divider);
        backdrop-filter: var(--backdrop-filter);
    }

    input[type=text] {
        width: 49.8%;
        box-sizing: border-box;
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