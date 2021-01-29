<template>
  <div class="cart-bottom-bar">
    <div class="chenk-content">
      <check-button class="all" 
      :is-selected="isSelectedAll"
      @click="checkClick"/>
      <span>全选</span>
    </div>
    <div class="total-price">    
      合计:{{totalPrice}}
    </div>
    <div class="calculate" @click="calculateClick">
      去计算({{toCalculate}})
    </div>
    <toast :message="message" :is-toast-show="toastShow"/>

  </div>
</template>

<script>
import CheckButton from 'components/content/checkbutton/CheckButton'
import Toast from 'components/common/toast/Toast'

export default {
  components: {
    CheckButton,
    Toast
  },
  data() {
    return {
      message: '',
      toastShow: false
    }
  },
  computed: {
    totalPrice() {
      return '¥' + this.$store.state.cartList.filter(item => {
        //filter(过滤)取出选中状态的商品
        return item.checked
      }).reduce((preValue,item) => {
        return preValue + (item.price * item.counted)
      },0).toFixed(2)
    },
    toCalculate() {
      return this.$store.state.cartList.filter(item => {
        //filter(过滤)取出选中状态的商品
        return item.checked
      }).length
    },
    isSelectedAll() {
      //当购物车里没有商品时。全选状态为false
      if(this.$store.state.cartList.length === 0) {
        return false
      }
      //查找没有被选中的商品
      //如果有没被选中的商品则length不为0,取反之后为false 
      //如果商品都被选中则length为0,取反之后为true 
      return !(this.$store.state.cartList.filter(item => {   
        return !item.checked
      }).length)
    }
  },
  methods: {
    checkClick() {
      //点击全选按钮
      if(this.isSelectedAll){ 
        this.$store.state.cartList.forEach(item => {
          return item.checked = false
        })
      }else{
        this.$store.state.cartList.forEach(item => {
          return item.checked = true
        })
      }
    },
    calculateClick() {
      if(!this.isSelectedAll) {
        this.message = '请选择要添加的商品'
        this.toastShow = true

        setTimeout(() => {
          this.message = ''
        this.toastShow = false
        },1000)
      }else{
        alert('请支付' + this.totalPrice + '元')
      }
    }
  } 
}

</script>

<style>
.cart-bottom-bar {
  height: 40px;
  background-color:#eee;
  display: flex;
  align-items: center;
  font-size: 14px;
}
.chenk-content {
  width: 80px;
  display: flex;
}
.all {
  margin: 0 5px 0 10px;
}
.total-price{
  flex: 1;
  margin-left: 10px;
}
.calculate{
  width: 80px;
  height: 100%;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background-color: rgb(231, 5, 5);
}
</style>