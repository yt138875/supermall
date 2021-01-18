<template>
  <div class="baseInfo" v-if="Object.keys(goods).length !== 0">
    <div class="title">{{goods.title}}</div>
    <div class="price">
      <span class="n-price">{{goods.newPrice}}</span> 
      <span class="o-price">{{goods.oldPrice}}</span>
      <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
    </div>
    <div class="other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="services" >
      <span class="services-item" v-for="(item,index) in goods.services.length-1" :key="index">
        <img :src="goods.services[item-1].icon" alt="">
        <span>{{goods.services[item-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    goods:{
      type: Object,
      default() {
        return {}
      }
    }
  },
}
</script>

<style scoped>
.baseInfo{
  margin-top: 6px;
  padding: 0 5px;
  color: #999;
  border-bottom: 5px solid #eee;
}
.title{
  color: #222;
}
.price{
  margin-top: 3px;

}
.n-price{
  font-size: 24px;
  color: var(--color-tint);
}
.o-price{
  font-size: 13px;
  margin-left: 4px;
  color: #999;
  text-decoration: line-through;
}
.discount{
  font-size: 12px;
  background-color: var(--color-tint);
  color: #ffffff;
  padding: 2px 5px;
  border-radius: 8px;
  position: relative;
  top: -6px;
}
.other{
  display: flex;
  line-height: 30px;
  justify-content: space-between;
  font-size: 13px;
  border-bottom: 1px solid rgb(243, 240, 240);
}
.services {
  margin: 15px 0;
  color: #333;
  display: flex;
  justify-content: space-between;
}
.services img{
  position: relative;
  top: 2px;
  width: 13px;
  height: 13px;
}
.services span{
  font-size: 13px;
}
</style>