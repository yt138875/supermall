<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goods" 
    :key="index"
    :goods-item="item"
    @load="imgLoad"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodsListItem
  },
  methods: {
    imgLoad() {
      this.$emit('imgitemload')
    }
  }
}
</script>

<style>
  .goods{
    display: flex;
    /* 子元素平分多余的空间 */
    justify-content: space-around;
    /* 换行 */
    flex-wrap: wrap;
  }
</style>