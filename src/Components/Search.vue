<template>
  <div class="search-wrapper">
    <div class="search-inner">
      <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
        <path fill="#F5F5F5" fill-rule="evenodd" d="M7.563 4a3.563 3.563 0 1 0 0 7.127 3.563 3.563 0 0 0 0-7.127ZM3 7.563a4.563 4.563 0 1 1 8.124 2.854l2.73 2.73-.708.707-2.729-2.73A4.563 4.563 0 0 1 3 7.563Z" clip-rule="evenodd"/>
      </svg>

      <input
        class="search-input"
        :value="modelValue"
        placeholder="Eg. Webflow"
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
    width: 16px;
    height: 16px;
    color: currentColor;
    margin-right: 4px;
  }
  .search-input {
    display: block;
    width: 100%;
    padding: 4px;
    color: var(--text1);
    border: none;
    background-color: transparent;
    outline: none;

    ::placeholder {
      color: var(--textInactive)
    }
  }
</style>