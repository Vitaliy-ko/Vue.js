<template>
  <div>
    <div class="mt-3">
      <div
        class="note"
        v-for="(note, index) in notes"
        :key="index"
      >
        <div class="card">
          <div class="toast-header">
            <strong class="mr-auto">{{ note.title }}</strong>
            <span
              class="badge badge-dark mr-1"
              v-if="note.isCopied"
            >Copied</span>
            <small class="text-muted">{{note.date.slice(0, 10)}}</small>
            <button
              type="button"
              class="ml-2 mb-1 pt-1 close"
              data-dismiss="toast"
              aria-label="Close"
              @click="removeNote(index)"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="card-body">
            <p class="card-text">Text: {{note.text}}</p>
            <p class="card-text">Email: {{note.email}}</p>

            <button
              class="btn btn-dark"
              @click="copyNote(notes, note)"
            >Copy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventEmmiter } from "../../main";
export default {
  props: ["notes"],
  methods: {
    removeNote(index) {
      this.notes.splice(index, 1);
    },
    copyNote(notes, note) {
      let copiedNote = Object.assign({}, note);
      copiedNote.isCopied = true;
      notes.push(copiedNote);
    }
  }
};
</script>

<style scoped lang="scss">
.card {
  text-align: left;
  border: 1px solid #2c3e50;
  border-radius: 4px;
  padding-left: 8px;
  padding-right: 8px;
}

.note {
  padding: 5px;
}
</style>
