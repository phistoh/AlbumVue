<template>
    <div class="flex-horizontal">
      <div id="stats-label">
          <div>CD:</div><div id="cd-amount">{{ cdAmount }}</div>
          <div>Digital:</div><div id="digital-amount">{{ digitalAmount }}</div>
          <div>Vinyl:</div><div id="vinyl-amount">{{ vinylAmount }}</div>
          <div>Tape:</div><div id="tape-amount">{{ tapeAmount }}</div>
      </div>

      <input id="filter-edit" type="text" placeholder="🔎︎" v-model="value" @input="updateFilter"/>
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
  },
  methods: {
    updateFilter:function() {
      this.$emit('filter-input-changed', this.value)
    }
  }
}
</script>

<style>
    #stats-label{
        width: 80vw;
        min-width: 640px;
        margin-right: 4px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        cursor: default;
        padding: 8px;
        border: 1pt solid var(--divider);
        backdrop-filter: var(--backdrop-filter);
        height: 16px;
    }

    #filter-edit {
        width: 20vw;
        min-width: 220px;
        margin-right: 0;
        padding: 8px;
    }
</style>