<template>
  <div>
    <ul class="logos-list">
      <Icon v-for="(icon,key) in filteredList" :key="key" :icon="icon" :include-color="includeColor" />
    </ul>
  </div>
</template>

<script>
import * as icons from 'simple-icons';
import Icon from "./Icon.vue";

export default {
  components: {
    Icon
  },
  props: ["search", "includeColor"],
  data() {
    return {
      icons,

    }
  },
  computed: {
    iconsList() {
      return Object.values(this.icons);
    },
    filteredList() {
      if (this.search.length === 0 || typeof this.search === undefined) {
        return this.iconsList;
      }

      return this.iconsList.filter(icon => {
        return icon.title.toLowerCase().indexOf(this.search.toLowerCase()) !== -1;
      });
    }
  }
}
</script>

<style lang="scss">
.logos-list {
  width: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1px;
  list-style: none;
}
</style>