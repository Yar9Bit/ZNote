<template>
  <div>
    <template v-if="note !== undefined">
      <h2>Subject: {{ note.subject }}</h2>
      <p>Text: {{ note.text }}</p>
      <EditNoteItem :note="note" @updated="$emit('updated', $event)"/>
      <b-button @click="deleteNote" variant="danger">Delete</b-button>
    </template>
  </div>
</template>

<script>
import {get, delete_} from "@/backend";
import EditNoteItem from "@/components/Notes/EditNoteItem";

export default {
  name: "NoteItem",
  components: {EditNoteItem},

  props: {
    noteId: {type: Number, default: undefined},
  },
  data() {
    return {
      note: undefined,
    }
  },
  mounted() {
    this.loadNote();
  },
  watch: {
    noteId: function () {
      this.loadNote();
    },
  },
  methods: {
    loadNote() {
      if (this.noteId === undefined)
        this.note = undefined;
      else
        get(`note/${this.noteId}`).then(d => this.note = d);
    },
    deleteNote() {
      delete_(`note/${this.noteId}`).then(() => {
        this.note = undefined;
        this.$emit('deleted');
      });
    },
  },
}
</script>

<style scoped>

</style>