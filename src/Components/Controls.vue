<template>
  <div class="controls">
    <div class="checkbox-group">
      <input type="checkbox" v-model="shouldIncludeColor" class="hidden" name="includecolors" id="includecolors">
      <label for="includecolors">
        <span class="checkbox">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 12 12" 
            v-show="shouldIncludeColor"
          >
            <path stroke="currentColor" stroke-width="1.25" d="m2.5 6.5 2 2 5-5"/>
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
            fill="none" 
            viewBox="0 0 12 12" 
            v-show="shouldShowName"
          >
            <path stroke="currentColor" stroke-width="1.25" d="m2.5 6.5 2 2 5-5"/>
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
      width: 12px;
      height: 12px;
      display: flex;
      align-items: center;
      margin-right: 4px;
      border: 1px solid var(--border3);
      background-color: var(--backgroundInput);
      border-radius: 2px;
      box-shadow: var(--boxShadows-input-inner);
      

      svg {
        width: 12px;
        height: 12px;
      }
    }

    label {
      cursor: pointer;

      &:hover .checkbox {
        background-color: var(--background2);
      }
    }

    input[type="checkbox"] {
      &:checked + label {
        .checkbox {
          background-color: var(--actionPrimaryBackground);
          border-color: var(--actionPrimaryBackground);
          box-shadow: none;
        }
      }
      &:focus + label {
        .checkbox {
          outline: 1px solid var(--blueBorder);
        }
      }
    }
  }
</style>