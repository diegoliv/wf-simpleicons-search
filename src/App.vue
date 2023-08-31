<template>
  <Header />
  <Search v-model="searchInput" />
  <Controls v-model:includecolor="includeColor" />
  <IconsList :search="searchInput" :include-color="includeColor" v-if="isValidInput && isElSelected" />
  <EmptySearch v-if="!isValidInput && isElSelected" />
  <NotSelected v-if="!isElSelected" />
</template>

<script>
import Header from './Components/Header.vue';
import Search from "./Components/Search.vue";
import IconsList from "./Components/IconsList.vue";
import EmptySearch from "./Components/EmptySearch.vue";
import NotSelected from "./Components/NotSelected.vue";
import Controls from "./Components/Controls.vue";

export default {
  components: {
    Header,
    Search,
    IconsList,
    Controls,
    EmptySearch,
    NotSelected
  },
  data() {
    return {
      searchInput: "",
      includeColor: false,
      isElSelected: false,
      selectedEl: null,
    }
  },
  mounted() {
    const unsubscribeSelectedElement = webflow.subscribe('selectedelement', this.selectedElementCallback);
  },
  computed: {
    isValidInput() {
      return this.searchInput.length > 0 && typeof this.searchInput !== undefined;
    }
  },
  methods: {
    selectedElementCallback(element){
      if (element && element.children) {
        this.isElSelected = true;
        this.selectedEl = element;
      } else {
        this.isElSelected = false;
        this.selectedEl = null;
      }
    }
  }
}
</script>