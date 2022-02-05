<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav">
      <div
        class="gulu-tabs-nav-item"
        :class="{selected: title === selected}"
        v-for="(title,index) in titleList"
        :key="index"
        @click="select(title)"
      >{{title}}</div>
    </div>
    <div class="gulu-tabs-content">
      <component
        class="gulu-tabs-content-item"
        :class="{selected: node.props.title === selected}"
        v-for="(node, index) in slotsNode"
        :key="index"
        :is="node"
      ></component>
    </div>
  </div>
</template>
<script lang="ts">
import Tab from "./Tab.vue";
export default {
  name: "Tabs",
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const slotsNode = context.slots.default();
    slotsNode.forEach(element => {
      if (element.type !== Tab) {
        throw new Error("Tabs子标签必须是Tab");
      }
    });
    const titleList = slotsNode.map(item => item.props.title);
    const select = function(title) {
      context.emit("update:selected", title);
    };
    return {
      slotsNode,
      titleList,
      select
    };
  }
};
</script>
<style lang="scss">
$blue: #40a9ff;
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