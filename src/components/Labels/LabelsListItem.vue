<template>
  <div>
    <b-table :items="labelsList" :fields="['name']" sort-by="id" selectable select-mode="single"
             @row-selected="onRowSelected"></b-table>
  </div>
</template>

<script>
import {get} from "@/backend";

export default {
  name: "LabelsListItem",
  data() {
    return {
      labelsList: undefined,
    }
  },
  mounted() {
    this.fetchLabels();
  },
  methods: {
    fetchLabels() {
      get('labels').then(d => this.labelsList = d);
    },
    onRowSelected(rows) {
      this.$emit('selected', rows.length ? rows[0].id : undefined);
    },
  },
}
</script>

<style scoped>
</style>