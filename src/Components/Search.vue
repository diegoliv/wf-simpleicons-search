<template>
  <div class="search-wrapper">
    <div class="search-inner">
      <svg
        class="search-icon"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4765 11.8907C9.49572 12.5892 8.29583 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7C13 8.29583 12.5892 9.49572 11.8907 10.4765L14.9996 13.5854L13.5854 14.9996L10.4765 11.8907ZM11 7C11 9.20914 9.20914 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3C9.20914 3 11 4.79086 11 7Z" fill="currentColor"></path>
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
    position: relative;
    padding: 8px;
    border-bottom: 1px solid var(--border1);
  }
  .search-inner {
    display: flex;
    align-items: center;
    min-height: 32px;
    padding: 4px;
    background: var(--background4);
    border: 1px solid var(--border2);
    color: var(--text1);
    border-radius: 4px;
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