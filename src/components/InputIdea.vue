<script>
  export default {
    props: [
      'updatetitle',
      'updatebody',
      'addidea'
    ]
  }
</script>

<template>
  <div>
    <input
      class="form-control"
      @keyup="updatetitle($event)"
    >
    <h4>Body</h4>
    <input
      class="form-control"
      @keyup="updatebody($event)"
    >
    <button
      class="btn btn-success"
      v-on:click="addidea"
    >
    Submit
    </button>
  </div>
</template>