<script>
  export default {
    props: [
      'idea',
      'index',
      'qualityup',
      'qualitydown',
      'removeidea',
      'updateidea'
    ]
  }
</script>

<template>
  <div class="idea-container container">
    <br>
    <span
        class="glyphicon glyphicon-chevron-up up topleft"
        v-on:click="qualityup(index)"
      >
    </span>
      <span
        class="glyphicon glyphicon-chevron-down down topleftdown"
        v-on:click="qualitydown(index)"
      >
    </span>
    <span
      class="glyphicon glyphicon-remove topright"
      v-on:click="removeidea(index)"
    >
    </span>
    <br>
    <h4
      class="idea-title"
      v-on:blur="updateidea($event, index)"
      contenteditable="true"
    >
      {{ idea.title }}
    </h4>
    <h5
      class="idea-body"
      v-on:blur="updateidea($event, index)"
      contenteditable="true"
    >
      {{ idea.body }}
    </h5>
    <hr>
    <span><em>{{ idea.quality }}</em></span><br>
    <br>
    </button>
  </div>
</template>