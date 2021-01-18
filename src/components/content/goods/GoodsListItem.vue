<template>
  <div class="goods-item" >
    <img :src="showImage" alt="" @load="imgLoad" @click="imgClick">
    <div class="goods-info">
      <p class="title">{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="cfav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  computed: {
    showImage() {
      //报错  ？？？为什么
      // return this.goodsItem.show.img || this.goodsItem.image
      //不报错
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    imgLoad() {
      //发射一个事件（事件总线）
      this.$emit('load')
    },
    imgClick() {
      //点击img实现路由跳转
      this.$router.push({
        path: '/detail/' + this.goodsItem.iid,
        // query: {

        // }
      })
    }
  }
}
</script>

<style>
  .goods-item{
    position: relative;
    /* 此处padding值是为了挤出一出空地给goods-info盒子 */
    padding-bottom: 40px;
    width: 48%;
  }
  .goods-item img{
    border-radius: 5px;
    width: 100%;
  }
  .goods-info{
    position: absolute;
    /* 此處left值和right值是爲了固定住這個盒子的寬度 */
    left: 0;
    right: 0;
    /* width: 100%; */
    font-size: 12px;
    /* overflow: hidden; */
    text-align: center;
  }
  .title{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 4px;
  } 
  .price{
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .cfav{
      position: relative;
  }
  .cfav::before{
    content: '';
    position: absolute;
    left: -14px;
    top: -1px;
    width: 14px;
    height: 14px;
    /* 0 0/14px 14px---第一个0表示背景颜色  0/14px 14px表示背景图位置尺寸  */
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>