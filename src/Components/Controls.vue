<template>
  <div class="controls">
    <div class="checkbox-group">
      <input type="checkbox" v-model="isChecked" class="hidden" name="includecolors" id="includecolors">
      <label for="includecolors">
        <span class="checkbox">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 13 11"
            v-show="isChecked"
          >
            <path fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" d="M11 2L5.5 8.5 2 5"></path>
          </svg>

        </span>

        Include brand colors
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: ['includecolor'],
  data() {
    return {
      isChecked: false
    }
  },
  watch: {
    isChecked() {
      this.$emit('update:includecolor', this.isChecked);
    }
  }
}
</script>

<style lang="scss">
  .controls {
    padding: 8px;
    border-bottom: 1px solid var(--border1);
    color: var(--text1);
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
      cursor: pointer;

      svg {
        width: 13px;
        height: 11px;
      }
    }
  }
</style>