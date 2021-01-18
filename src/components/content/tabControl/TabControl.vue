<template>
  <div class="tab-control">
    <div
      class="control-item"
      v-for="(item, index) in titles" :key="index"     
      :class="{ active: index === currentItem }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentItem: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentItem = index
      //将子组件中的索引index传递给父组件
      this.$emit('controlClick',index)
    }
  }
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
}

.control-item {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
  padding: 8px;
}
</style>