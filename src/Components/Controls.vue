<template>
  <div class="controls">
    <div class="checkbox-group">
      <input type="checkbox" v-model="shouldIncludeColor" class="hidden" name="includecolors" id="includecolors">
      <label for="includecolors">
        <span class="checkbox">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 13 11"
            v-show="shouldIncludeColor"
          >
            <path fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" d="M11 2L5.5 8.5 2 5"></path>
          </svg>

        </span>

        Include brand colors
      </label>
    </div>
    <div class="checkbox-group">
      <input type="checkbox" v-model="shouldShowName" class="hidden" name="shownames" id="shownames">
      <label for="shownames">
        <span class="checkbox">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 13 11"
            v-show="shouldShowName"
          >
            <path fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" d="M11 2L5.5 8.5 2 5"></path>
          </svg>

        </span>

        Show names
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: ['includecolor', 'showname'],
  data() {
    return {
      shouldIncludeColor: false,
      shouldShowName: false
    }
  },
  watch: {
    shouldIncludeColor() {
      this.$emit('update:includecolor', this.shouldIncludeColor);
    },
    shouldShowName() {
      this.$emit('update:showname', this.shouldShowName);
    },
  }
}
</script>

<style lang="scss">
  .controls {
    position: sticky;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    top: 0;
    z-index: 10;
    padding: 8px;
    color: var(--text1);
    border-bottom: 1px solid var(--border1);
    background-color: var(--background1);
  }
  .checkbox-group {
    label {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    .hidden {
      display: none;
    }

    .checkbox {
      width: 13px;
      height: 13px;
      display: flex;
      margin-right: 4px;
      border: 1px solid var(--border2);
      background-color: var(--background4);
      border-radius: 2px;

      svg {
        width: 13px;
        height: 11px;
      }
    }

    label {
      cursor: pointer;
    }
  }
</style>