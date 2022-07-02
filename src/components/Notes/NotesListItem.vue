<template>
  <div>
    <b-table :items="notesList" :fields="['subject']" sort-by="id" selectable select-mode="single"
             @row-selected="onRowSelected"></b-table>
  </div>
</template>

<script>
import {get} from "@/backend";

export default {
  name: "NotesListItem",
  data() {
    return {
      notesList: undefined,
    }
  },
  mounted() {
    this.fetchNotes();
  },
  methods: {
    fetchNotes() {
      get('notes').then(d => this.notesList = d);
    },
    onRowSelected(rows) {
      this.$emit('selected', rows.length ? rows[0].id : undefined);
    },
  },
}
</script>

<style scoped>
</style>