<template>
  <div class="search-wrapper">
    <div class="search-inner">
      <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
        <path fill="#F5F5F5" fill-rule="evenodd" d="M7.563 4a3.563 3.563 0 1 0 0 7.127 3.563 3.563 0 0 0 0-7.127ZM3 7.563a4.563 4.563 0 1 1 8.124 2.854l2.73 2.73-.708.707-2.729-2.73A4.563 4.563 0 0 1 3 7.563Z" clip-rule="evenodd"/>
      </svg>
      <label for="search-input" class="sr-only">Search Icons</label>
      <input
        id="search-input"
        class="search-input"
        :value="modelValue"
        placeholder="Search icons"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue']
}
</script>

<style lang="scss">
  .search-wrapper {
    width: 100%;
    position: relative;
    padding: 8px;
    color: var(--text1);
    border-bottom: 1px solid var(--border1);
  }
  .search-inner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: var(--backgroundInput);
    color: var(--text4);
    border: 1px solid var(--border2);
    box-shadow: var(--input-inner-shadow);
    border-radius: var(--border-radius);

    &.active {
      box-shadow: var(--input-inner-shadow), 0 0 0 1px var(--blueBorder);      
    }
  }
  .search-icon {
    position: absolute;
    width: 16px;
    height: 16px;
    color: currentColor;
    left: 4px;
  }
  .search-input {
    display: block;
    width: 100%;
    padding: 4px 4px 4px 24px;
    color: var(--text1);
    border: none;
    background-color: transparent;
    outline: none;
    border-radius: var(--border-radius);

    ::placeholder {
      color: var(--textInactive);
    }

    &:focus {
      outline: 1px solid var(--blueBorder);
    }
  }
  .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
    -webkit-clip-path: inset(50%) !important;
      clip-path: inset(50%) !important;  /* 2 */
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;            /* 3 */
  }
</style>