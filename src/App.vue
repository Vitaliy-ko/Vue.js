<template>
  <div
    id="app"
    class="container mx-auto"
  >
    <notes-page />
  </div>
</template>

<script>
import notesPage from "./components/NotesPage/notesPage";

export default {
  name: "app",
  components: {
    notesPage
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 20px;
}
</style>
