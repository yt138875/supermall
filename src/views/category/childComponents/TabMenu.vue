<template>
  <div id="tab-menu">
    <scroll class="menu-list">     
        <div class="menu-item" 
             v-for="(item,index) in categories" :key="index"
             @click="itemClick(index)"
             :class="{active: index===currentIndex}">
          {{item.title}}     
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
export default {
  components: {
    Scroll
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    categories: {
      type: Array,
      default: []
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('selectItem',index)
    }
  }
}
</script>

<style scoped>
#tab-menu{
  background-color: #f6f6f6;
  height: calc(100%);
  width: 100px;
  box-sizing: border-box;
}
.menu-list{
  height: calc(100%);
  overflow: hidden;
}
.menu-item{
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 15px;
}
.menu-list .active{
  border-left: 3px solid var(--color-high-text);
  color: var(--color-high-text);
  background-color: #fff;
  font-weight: 700;
}
</style>