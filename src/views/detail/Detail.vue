<template>
  <div id="detail">
    <detail-bar @barIndex="barIndex" ref="bar"/>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="conentScroll">
      <detail-swiper :top-img="topImg"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info :param-info="paramInfo"  ref="param"/>
      <detail-comment-info :comment-info="commentInfo" ref="comment"/>
      <goods-list :goods="recommend" @imgitemload="imgItemLoad" ref="recommend"/>
    </scroll>
    <detail-bottom-bar @backToCart="backToCart"/>
    <back-top @click.native="topClick" v-show="isShow"></back-top>
    <toast :message="message" :is-toast-show="toastShow"/>
  </div>

</template>

<script>
//引入子组件
import DetailBar from './childComponents/DetailBar'
import DetailSwiper from './childComponents/DetailSwiper'
import DetailBaseInfo from './childComponents/DetailBaseInfo'
import DetailShopInfo from './childComponents/DetailShopInfo'
import DetailGoodsInfo from './childComponents/DetailGoodsInfo'
import DetailParamInfo from './childComponents/DetailParamInfo'
import DetailCommentInfo from './childComponents/DetailCommentInfo'
import DetailBottomBar from './childComponents/DetailBottomBar'
//引入公共组件
import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
import Toast from 'components/common/toast/Toast'

//引入网路请求
import {getDetail, getRecommend , Goods , Shop, GoodsSize} from 'network/detail.js'
//引入混入
import {itemImgLoad,backTopMixin} from "common/mixin.js"
export default {
  name: 'Detail',
  components: {
    DetailBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
    Toast
  },
  mixins: [itemImgLoad,backTopMixin],
  data() {
    return {
      id: null,
      topImg: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      barTopY: [],
      currentIndex: 0,
      message: '',
      toastShow: false
    }
  },
  created() {
    //1.当组件创建时获取当前img中的id参数
    this.id = this.$route.params.id   
    //2.根据id请求数据
    getDetail(this.id).then(res => {
      // console.log(res);
      const data = res.result
      //1.获取轮播图数据
      this.topImg = data.itemInfo.topImages
      //2.获取商品信息    
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      //3.获取商家信息
      this.shop = new Shop(data.shopInfo)
      //5.获取商品详细信息  
      this.detailInfo = data.detailInfo
      //6.获取商品尺码
      this.paramInfo= new GoodsSize(data.itemParams.info,data.itemParams.rule)
      //7.獲取评论信息
      if(data.rate.cRate !== 0){
        this.commentInfo = data.rate.list[0]
      }
    })
    //3.请求推荐数据
    getRecommend().then((res) => {
      this.recommend = res.data.list
    })
  },
  methods: {
    //监听商品图片的加载
    imageLoad() {
      //因为子组件中做了判断，此处的事件只会触发一次
      this.$refs.scroll.refresh()
      //等图片加载完成之后，将各个组件所在的Y值添加到barTopY数组中
      this.barTopY.push(0)
      this.barTopY.push(this.$refs.param.$el.offsetTop)
      this.barTopY.push(this.$refs.comment.$el.offsetTop)
      this.barTopY.push(this.$refs.recommend.$el.offsetTop)
      //在数组中多添加一个最大的number值，用来做页面滚动时的里面值的条件判断
      this.barTopY.push(Number.MAX_VALUE)
    },
    //监听标题部分选项的点击
    barIndex(index) {
      //点击选项跳转到固定位置
      this.$refs.scroll.scrollTo(0,-this.barTopY[index],300)
    },
    //监听页面滚动
    conentScroll(position) {
      //1.获取Y值
      const positionY = -position.y
      //2.将positionY与页面中的内容位置做对比
      const length = this.barTopY.length
      //因为在数组中多加了一个用来作比较的值，所以遍历的时候要少遍历一次
      for(let i = 0;i < length - 1; i++) {      
        if(this.currentIndex !== i && (positionY >= this.barTopY[i] && positionY <= this.barTopY[i+1]) ){
          this.currentIndex = i
          this.$refs.bar.currentIndex = this.currentIndex
        }
      }
      //判断backtop是否显示   通过页面滚动的y值来赋予isShow不同的布尔值
      this.isShow = (-position.y) >= 1000
    },
    backToCart() {
      // console.log('點擊去往購物車');
      //1.获取购物车所需要的数据
      const product = {}
      product.img = this.topImg[0]
      product.price = this.goods.realPrice
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.id = this.id
      //2.将数据保存到store仓库中
      this.$store.dispatch('addCart',product).then( res => {
        this.message = res
        this.toastShow = true

        setTimeout(() => {
          this.message = ''
          this.toastShow = false
        },1000)
      })
    }
    // imgItemLoad() {
    // 此处的数据放如混入中了
    //   this.$refs.scroll.refresh()
    // }
  }
}
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.content{
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>