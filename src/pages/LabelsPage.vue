<template>
  <div>
    <h2>Add label</h2>
    <AddLabelItem @added="reloadLabelsList"/>
    <h2>Labels List</h2>
    <LabelsListItem ref="labelsList" @selected="selectedLabel=$event"/>
    <LabelItem :label-id="selectedLabel" @deleted="reloadLabelsList" @updated="reloadLabelsList"/>
  </div>
</template>

<script>
import LabelsListItem from "@/components/Labels/LabelsListItem";
import AddLabelItem from "@/components/Labels/AddLabelItem";
import LabelItem from "@/components/Labels/LabelItem";

export default {
  name: "NotesPage",
  components: {LabelItem, AddLabelItem, LabelsListItem},
  data() {
    return {
      selectedLabel: undefined
    };
  },
  methods: {
    reloadLabelsList() {
      // reloadLabelsList - плохой метод с точки зрения нагрузки, быстродействия и обновления списка на каждый чих
      // Вместо него надо добавлять, изменять и удалять заметки прямо в labelsList, без запроса на сервер.
      this.$refs.labelsList.fetchLabels();
    }
  },
}
</script>

<style scoped>
</style>