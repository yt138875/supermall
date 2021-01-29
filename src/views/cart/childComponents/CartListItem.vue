<template>
  <div class="cart-item">
    <div class="item">
      <div class="check-selector">
        <check-button @click.native="checkClick" :is-selected="product.checked"/>
      </div>
      <div  class="item-img">
         <img :src="product.img" alt="">
      </div>
      <div class="item-info">
        <div class="item-title">{{product.title}}</div>
        <div class="item-desc">{{product.desc}}</div>
        <div class="info-bottom">
          <div class="price ">¥{{product.price}}</div>
          <div class="counted ">x{{product.counted}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkbutton/CheckButton'
export default {
  components: {
    CheckButton
  },
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    checkClick() {
      this.product.checked = !this.product.checked
    }
  }
}
</script>

<style scoped>
.item{
  width: 100%;
  display: flex;
  padding: 6px 0;
  border-bottom: 1px solid #ccc;
}
.check-selector{
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 4px;
}
.item-img img{
  display: block;
  border-radius: 8px;
  width: 80px;
  height: 100px;
}
.item-info{
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-title ,.item-desc{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item-desc{
  margin: 13px 0;
  color: #666;
  font-size: 12px;
}
.info-bottom{
  display: flex;
  position: relative;
  margin-top: 20px;
}
.counted{
  position: absolute;
  right: 15px;
}
</style>