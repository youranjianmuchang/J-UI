<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
      <div
        class="gulu-tabs-nav-item"
        :class="{selected: title === selected}"
        v-for="(title,index) in titleList"
        :ref=" el => { if (title === selected) selectedElement = el }"
        :key="index"
        @click="select(title)"
      >{{title}}</div>
      <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="gulu-tabs-content">
      <component :is="currentComponent" :key="currentComponent.props.title"></component>
    </div>
  </div>
</template>
<script lang="ts">
import Tab from "./Tab.vue";
import { ref, onMounted, watchEffect, computed } from "vue";
export default {
  name: "Tabs",
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const selectedElement = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    onMounted(() => {
      watchEffect(() => {
        const {
          width,
          left: left1
        } = selectedElement.value.getBoundingClientRect();
        indicator.value.style.width = width + "px";
        const { left: left2 } = container.value.getBoundingClientRect();
        indicator.value.style.left = left1 - left2 + "px";
      });
    });
    const slotsNode = context.slots.default();
    slotsNode.forEach(element => {
      if (element.type !== Tab) {
        throw new Error("Tabs子标签必须是Tab");
      }
    });
    const currentComponent = computed(() => {
      return slotsNode.filter(node => node.props.title === props.selected)[0];
    });
    const titleList = slotsNode.map(item => item.props.title);
    const select = function(title) {
      context.emit("update:selected", title);
    };
    return {
      slotsNode,
      titleList,
      select,
      selectedElement,
      indicator,
      container,
      currentComponent
    };
  }
};
</script>
<style lang="scss">
$blue: #1890ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>