<template>
  <main class="app-wrapper">
    <header>
      <AppHeader />
      <Search v-model="searchInput" />
    </header>
    <Controls 
      v-model:includecolor="includeColor" 
      v-model:showname="showName" 
    />
    <IconsList 
      :search="searchInput" 
      :include-color="includeColor" 
      :show-name="showName" 
      v-if="isValidInput && isElSelected" 
    />
    <EmptySearch v-if="!isValidInput && isElSelected" />
    <NotSelected v-if="!isElSelected" />
  </main>
</template>

<script>
import AppHeader from './Components/Header.vue';
import Search from "./Components/Search.vue";
import IconsList from "./Components/IconsList.vue";
import EmptySearch from "./Components/EmptySearch.vue";
import NotSelected from "./Components/NotSelected.vue";
import Controls from "./Components/Controls.vue";

export default {
  components: {
    AppHeader,
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
      showName: false,
      isElSelected: false,
      selectedEl: null,
      // List of elements that shouldn't be a wrapper for an SVG icon
      notAllowed: [
        'Paragraph',
        'List',
        'Heading',
        'Blockquote',
        'RichText',
        'DynamoWrapper',
        'DynamoList',
        'FormWrapper',
        'FormBlockLabel',
        'TabsWrapper',
        'TabsMenu',
        'TabsContent',
      ]   
    }
  },
  mounted() {
    webflow.subscribe('selectedelement', this.selectedElementCallback);
  },
  computed: {
    isValidInput() {
      return this.searchInput.length > 0 && typeof this.searchInput !== undefined;
    }
  },
  methods: {
    selectedElementCallback(element) {
      if (element && element.children && this.notAllowed.indexOf(element.type) === -1) {
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

<style lang="scss">
  .app-wrapper {
    position:relative;
  }
</style>