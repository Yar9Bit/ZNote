<template>
  <div>
    <b-button v-b-modal.editLabelModalDialog variant="warning">Edit Label</b-button>
    <b-modal id="editLabelModalDialog" title="Edit Label" @ok="updateLabel">
      <label>Name</label>
      <b-form-input v-model="label.name" type="text" placeholder="Enter label name"/>
    </b-modal>
  </div>
</template>

<script>
import {put} from "@/backend";

export default {
  name: "EditLabelItem",
  props: {
    label: Object,
  },
  methods: {
    updateLabel() {
      put(`label/${this.label.id}`, this.label).then(j => this.$emit('updated', j));
    }
  }
}
</script>

<style scoped>
</style>