<template>
  <div>
    <template v-if="label !== undefined">
      <h2>Name: {{ label.name }}</h2>
      <EditLabelItem :label="label" @updated="$emit('updated', $event)"/>
      <b-button @click="deleteLabel" variant="danger">Delete</b-button>
    </template>
  </div>
</template>

<script>
import {get, delete_} from "@/backend";
import EditLabelItem from "@/components/Labels/EditLabelItem";

export default {
  name: "LabelItem",
  components: {EditLabelItem},

  props: {
    labelId: {type: Number, default: undefined},
  },
  data() {
    return {
      label: undefined,
    }
  },
  mounted() {
    this.loadLabel();
  },
  watch: {
    labelId: function () {
      this.loadLabel();
    },
  },
  methods: {
    loadLabel() {
      if (this.labelId === undefined)
        this.label = undefined;
      else
        get(`label/${this.labelId}`).then(d => this.label = d);
    },
    deleteLabel() {
      delete_(`label/${this.labelId}`).then(() => {
        this.label = undefined;
        this.$emit('deleted');
      });
    },
  },
}
</script>

<style scoped>

</style>