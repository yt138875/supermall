<template>
  <div class="shop-info">
    <div class="shop">
      <img :src="shop.shopLogo" class="logo" alt="" />
      <span class="shopName">{{ shop.name }}</span>
    </div>
    <div class="middle">
      <div class="middle-left middle-item">
        <div >
          <p class="sells">{{ sellCountFilter(shop.sells) }}</p>
          <p>总销量</p>
        </div>
        <div>
          <p class="goodsCount">{{ shop.goodsCount }}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="middle-right middle-item">
        <div class="right-item"  v-for="(item,index) in shop.score" :key="index">
          <span>{{item.name}}</span>
          <span class="score" :class="{'score-color':item.isBetter}">{{item.score.toFixed(2)}}</span>
          <span class="better" :class="{'better-more':item.isBetter}">{{item.isBetter? '高':'低'}}</span>
        </div>
      </div>
    </div>
    <div class="shop-bottom">
      <span class="go-shop">进店逛逛</span>
    </div>
  </div>
  
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  //过滤器
  methods: {
    sellCountFilter(value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    },
  },
};
</script>

<style>
.shop-info {
  padding: 15px 8px;
  border-bottom: 5px solid rgb(240, 235, 235);
}
.shop {
  /* line-height: 45px; */
  display: flex;
  /* 垂直居中 */
  align-items: center;
  margin-bottom: 3px;
}
.logo {
  width: 45px;
  height: 45px;
  margin: 0 8px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.middle {
  display: flex;
  color: rgb(65, 62, 62);
}
.middle-item{
  flex: 1;
}
.middle-left{
  display: flex;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  border-right: 1px solid rgb(209, 203, 203);
}
.middle-left p{
  margin: 4px 0;
  font-size: 12px;
}
.sells ,.goodsCount{
  font-size: 14px!important;
}
.middle-right{
  font-size: 12px;
}
.right-item{
  margin: 4px 0;
}
.right-item span{
  margin-left: 20px ;
}
.score{
  color: green;
}
.score-color{
  color: red;
}
.better{
  color: #fff;
  background-color: green;
  margin-left: 10px!important;
}
.better-more{
  background-color: red;
}
.shop-bottom{
  text-align: center;
  margin-top: 15px;
}
.go-shop{
  background-color:#f2f5f8;
  font-size: 14px;
  border-radius: 11px;
  padding: 4px 50px;
}
</style>