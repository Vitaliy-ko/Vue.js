<template>
  <div class="btn-group">
    <button
      type="button"
      class="btn"
      @click="sort(notes, 'date'), activeSortButton(sortBy, 'date')"
      :class="{'btn-danger': sortBy.date, 'btn-light': !sortBy.date}"
    >Sort by date</button>
    <button
      type="button"
      class="btn"
      @click="sort(notes, 'title'), activeSortButton(sortBy, 'title')"
      :class="{'btn-danger': sortBy.title, 'btn-light': !sortBy.title}"
    >Sort by title</button>
  </div>
</template>

<script>
import { eventEmmiter } from "./../../main";

export default {
  props: ["notes"],
  data() {
    return {
      sortBy: {
        date: true
      }
    };
  },
  methods: {
    activeSortButton(sortBy, prop) {
      for (let key in sortBy) {
        sortBy[key] = false;
      }
      sortBy[prop] = true;
    },
    sort(value, key) {
      value.sort((a, b) => {
        a = a[key];
        b = b[key];
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
      });
    }
  }
};
</script>

<style scoped lang="scss">
.form {
  text-align: left;
}
</style>
