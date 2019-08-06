<template>
  <div>
    <p class="counter badge badge-secondary p-3">{{totalNotes}}</p>
  </div>
</template>

<script>
export default {
  props: ["notesCount"],
  computed: {
    totalNotes() {
      return this.notesCount.length;
    }
  }
};
</script>

<style scoped lang="scss">
.counter {
  font-size: 1.5rem;
}
</style>
