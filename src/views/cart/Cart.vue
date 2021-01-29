<template>
  <div class="cart">
    <nav-bar class="nav-home">
    <template v-slot:center>购物车({{cartLength}})</template>
    </nav-bar> 
    <scroll class="content" ref="scroll">
      <cart-list/>
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from "components/common/scroll/Scroll";
import CartList from './childComponents/CartList'
import CartBottomBar from './childComponents/CartBottomBar'

//vuex中getters的辅助函数
import {mapGetters} from 'vuex'

export default {
  components: {
    NavBar,
    Scroll,
    CartList,
    CartBottomBar
  },
  computed: {
    // 使用辅助函数 方法一
  //  ...mapGetters(['cartLength'])
  // 方法二
    ...mapGetters({
      cartLength: 'cartLength'
    })
  },
  activated() {
    this.$refs.scroll.refresh()
  },
  deactivated() {

  }

}
</script>

<style scoped>
.cart{
  height: 100vh;
  background-color: #fff;
  line-height: 20px;
}
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
.content{
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}

</style>