<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <span class="service icon"></span>
        <p>客服</p>
      </div>
      <div>
        <span class="shop icon"></span>
        <p>店铺</p>
      </div>
      <div>
        <span class="collection icon"></span>
        <p>收藏</p>
      </div>
    </div>
    <div class="bar-item" bar-right>
      <div class="cart" @click="toCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toCart() {
      this.$emit('backToCart')
    }
  }
};
</script>

<style>
.bottom-bar {
  height: 49px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  text-align: center;
}
.bar-item{
  display: flex;
  flex: 1;
}
.bar-item>div{
  flex: 1;
}
.bar-left{
  font-size: 13px;
}
.icon {
  display: inline-block;
  width: 22px;
  height: 22px;
  margin: 10px auto 0;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.shop {
  background-position: 0 -98px;
}
.service {
  background-position: 0 -54px;
}
.bar-right{
  font-size: 15px; 
}
.cart{
  background-color: #ffe817;
  line-height: 49px;
}
.buy{
  background-color: pink;
  line-height: 49px;
  color: #fff;
}
</style>