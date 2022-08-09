<template>
    <div id="stats-label">
        <div>CD:</div><div id="cd-amount">{{ cdAmount }}</div>
        <div>Digital:</div><div id="digital-amount">{{ digitalAmount }}</div>
        <div>Vinyl:</div><div id="vinyl-amount">{{ vinylAmount }}</div>
        <div>Tape:</div><div id="tape-amount">{{ tapeAmount }}</div>
    </div>
</template>

<script>
export default {
  name: 'AlbumStats',
  props: {
    cdAmount: Number,
    digitalAmount: Number,
    vinylAmount: Number,
    tapeAmount: Number
  }
}
</script>

<style>
   #stats-label{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px;
        cursor: default;
    }
</style>