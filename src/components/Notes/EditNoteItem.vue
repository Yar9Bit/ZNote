<template>
  <div>
    <b-button v-b-modal.editNoteModalDialog variant="warning">Edit Note</b-button>
    <b-modal id="editNoteModalDialog" title="Edit Note" @ok="updateNote">
      <label>Subject</label>
      <b-form-input v-model="note.subject" type="text" placeholder="Enter note subject"/>
      <label>Note text</label>
      <b-form-textarea v-model="note.text" placeholder="Enter note text"/>
    </b-modal>
  </div>
</template>

<script>
import {put} from "@/backend";

export default {
  name: "EditNoteItem",
  props: {
    note: Object,
  },
  methods: {
    updateNote() {
      put(`note/${this.note.id}`, this.note).then(j => this.$emit('updated', j));
    }
  }
}
</script>

<style scoped>
</style>