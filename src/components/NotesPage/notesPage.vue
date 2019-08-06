<template>
  <div class="col-sm-9 m-auto">
    <h1>{{ title }}</h1>
    <notes-counter :notesCount="notes"></notes-counter>
    <notes-form></notes-form>
    <notes-sort
      class="pt-3"
      :notes="notes"
    ></notes-sort>
    <notes-list :notes="notes"></notes-list>
  </div>
</template>

<script>
import { eventEmmiter } from "./../../main";

import notesForm from "./notesForm";
import notesList from "./notesList";
import notesCounter from "./notesCounter";
import notesSort from "./notesSort";

export default {
  components: {
    notesForm,
    notesList,
    notesCounter,
    notesSort
  },
  data() {
    return {
      title: "Notes",
      newNote: {},
      notes: [
        {
          title: "Hawaii",
          text: "I loved the beaches",
          date: new Date(Date.now()).toLocaleString()
        },
        {
          title: "London",
          text: "I loved the delicious fresh coconuts",
          date: new Date(Date.now() - 1000000).toLocaleString()
        }
      ]
    };
  },
  created() {
    eventEmmiter.$on("addNote", note => {
      this.newNote = note;

      this.notes.push(this.newNote);
    });
  }
};
</script>

<style scoped lang="scss">
.form {
  text-align: left;
}
</style>
