<script>
  export default {
    props: [
      'updatetitle',
      'updatebody',
      'addidea',
      'title',
      'body'
    ],
    computed: {
      inputTitle() {
        return this.title
      },
      inputBody() {
        return this.body
      }
    }
  }
</script>

<template>
  <div>
    <input
      class="form-control"
      v-model='inputTitle'
      @change='updatetitle($event)'
    >
    <h4>Body</h4>
    <input
      class="form-control"
      v-model='inputBody'
      @change='updatebody($event)'
    >
    <button
      class="btn btn-success"
      v-on:click='addidea'
    >
      Submit
    </button>
  </div>
</template>