<template>
<button class="logo-item" @click="insertIcon" @keyup.prevent.space="insertIcon" tabindex="0">
  <div class="icon-sizer">
    <a :href="icon.guidelines" target="_blank" class="icon-guidelines" v-if="icon.guidelines">
      <span class="guidelines-label">Guidelines</span> 
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
      >
        <path d="M11.549 3.023 5 9.57 6.43 11l6.547-6.548V8.67H15V1H7.33v2.023h4.219Z" fill="currentColor"/><path d="M5 4H1v11h11v-4h-2v2H3V6h2V4Z" fill="currentColor"/>
      </svg>
    </a>
    <div class="icon-wrapper" :style="{color: includeColor ? `#${icon.hex}`: 'currentcolor'}" v-html="icon.svg"></div>
    <h2 class="icon-name" v-show="showName">{{ icon.title }}</h2>
  </div>
</button>
</template>

<script>
  // import { addOrCreateStyle } from "../utils/styles";

  export default {
    props: ['icon', "includeColor", "showName"],
    methods: {
      async insertIcon() {
        const el = await webflow.getSelectedElement();

        if (el && el.children) {
          const child = webflow.createDOM('svg');
          await this.addOrCreateStyle('simple-icon', child);

          const childTitle = webflow.createDOM('title');
          const path = webflow.createDOM('path');
          child.setAttribute('role', 'img');
          child.setAttribute('viewBox', '0 0 24 24');
          child.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
          childTitle.setTextContent(this.icon.title);
          path.setAttribute('d', this.icon.path);
          path.setAttribute('fill', this.includeColor ? `#${this.icon.hex}` : 'currentcolor');

          child.setChildren([childTitle, path]);
          el.setChildren([child]);
          el.save();
        }
      },
      async addOrCreateStyle(name, el, props) {
        const allStyles = await webflow.getAllStyles();
        const existingStyle = allStyles.find((style) => style.getName() === name);

        if (existingStyle && existingStyle.id) {
          el.setStyles([existingStyle]);
          return;
        }

        const style = webflow.createStyle(name);

        if (props) {
          style.setProperties({ ...props });
        }
        await style.save();

        el.setStyles([style]);    
      }
    }
  }
</script>

<style lang="scss">
.logo-item {
  width: 100%;
  max-width: calc(312px / 3);
  padding: 16px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--actionPrimaryText);
  box-shadow: 0 0 0 1px var(--border1);
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: var(--background2);
  }

  &:focus {
    outline: 2px solid var(--blueBorder);
  }

  .icon-sizer {
    width: 100%;
  }

  .icon-wrapper {
    width: 100%;
    padding-bottom: 100%;
    position: relative;

    svg {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      fill: currentColor;
    }
  }

  .icon-name {
    margin: 8px 0 0;
    text-align: center;
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-normal);
    color: var(--text2);
    line-height: 1.1;
  }

  .icon-guidelines {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    top: 4px;
    right: 4px;
    padding: 2px 4px;
    height: 16px;
    min-width: 16px;
    font-size: var(--font-size-small);
    background-color: var(--purpleBackground);
    color: var(--actionPrimaryText);
    border-radius: 2px;
    line-height: 1;
    cursor: pointer;
    text-decoration: none;

    .guidelines-label {
      display: none;
      margin-right: 4px;
    }

    &:hover {
      background-color: var(--purpleBackgroundHover);
      .guidelines-label {display: block;}
    }

    &:focus {
      outline: 2px solid var(--blueBorder);
    }

    svg {
      width: 8px;
      height: 8px;
    }
  }
}
</style>