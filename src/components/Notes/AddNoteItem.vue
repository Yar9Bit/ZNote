<template>
  <div>
    <b-button v-b-modal.addNoteModalDialog variant="primary">Add Note</b-button>
    <b-modal id="addNoteModalDialog" title="Add Note" @ok="addNote">
      <label>Subject</label>
      <b-form-input v-model="note.subject" type="text" placeholder="Enter note subject"/>
      <label>Note text</label>
      <b-form-textarea v-model="note.text" placeholder="Enter note text"/>
    </b-modal>
  </div>
</template>

<script>
import {post} from "@/backend";

export default {
  name: "AddNoteItem",
  data() {
    return {
      note: {
        subject: "",
        text: "",
      },
    };
  },
  methods: {
    addNote() {
      post('note', this.note).then(j => this.$emit('added', j));
    },
  },
}
</script>

<style scoped>
</style>