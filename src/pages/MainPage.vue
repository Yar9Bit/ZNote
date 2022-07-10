<template>
  <div id="main" class="hello">
    <h1>It's working!</h1>
    <template v-if="!!text">
      <p>Text: {{ text }}</p>
      <b-button variant="danger">Click</b-button>
    </template>
  </div>
</template>

<script>
import {get} from "@/backend";

export default {
  name: 'MainPage',
  data() {
    return {
      text: undefined,
    }
  },
  mounted() {
    get('').then(d => this.text = d['text'])
  }
}
</script>
