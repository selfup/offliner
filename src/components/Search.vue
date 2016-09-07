<script>
  export default {
    props: [
      'clearallideas',
      'sortbyquality',
      'search',
      'searchTermAndSearch'
    ]
  }
</script>

<template>
  <div>
    <button
      class="btn btn-primary btn-sm"
      v-on:click="sortbyquality"
    >
    Sort By Quality
    </button>
    <button
      class="btn btn-warning btn-sm"
      v-on:click="clearallideas"
    >
    Clear All Ideas
    </button>
    <h4>Search</h4>
    <input
      class="form-control"
      v-on:keyup="searchTermAndSearch($event)"
    >
  </div>
</template>