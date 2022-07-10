<template>
  <div id="notes-page">
    <h2>Add note</h2>
    <AddNoteItem @added="reloadNotesList"/>
    <h2>Notes List</h2>
    <NotesListItem ref="notesList" @selected="selectedNote=$event"/>
    <NoteItem :note-id="selectedNote" @deleted="reloadNotesList" @updated="reloadNotesList"/>
  </div>
</template>

<script>
import NotesListItem from "@/components/Notes/NotesListItem";
import AddNoteItem from "@/components/Notes/AddNoteItem";
import NoteItem from "@/components/Notes/NoteItem";

export default {
  name: "NotesPage",
  components: {NoteItem, AddNoteItem, NotesListItem},
  data() {
    return {
      selectedNote: undefined
    };
  },
  methods: {
    reloadNotesList() {
      // reloadNotesList - плохой метод с точки зрения нагрузки, быстродействия и обновления списка на каждый чих
      // Вместо него надо добавлять, изменять и удалять заметки прямо в notesList, без запроса на сервер.
      this.$refs.notesList.fetchNotes();
    }
  },
}
</script>

<style scoped>
</style>