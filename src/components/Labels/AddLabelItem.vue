<template>
  <div>
    <b-button v-b-modal.addLabelModalDialog variant="primary">Add Label</b-button>
    <b-modal id="addLabelModalDialog" title="Add Label" @ok="addLabel">
      <label>Name</label>
      <b-form-input v-model="label.name" type="text" placeholder="Enter label name"/>
    </b-modal>
  </div>
</template>

<script>
import {post} from "@/backend";

export default {
  name: "AddLabelItem",
  data() {
    return {
      label: {
        name: "",
      },
    };
  },
  methods: {
    addLabel() {
      post('label', this.label).then(j => this.$emit('added', j));
    },
  },
}
</script>

<style scoped>
</style>