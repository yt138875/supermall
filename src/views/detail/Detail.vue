<template>
  <div id="detail">
    <detail-bar/>
    <scroll class="content" ref="scroll">
      <detail-swiper :top-img="topImg"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info :param-info="paramInfo"/>
      <detail-comment-info :comment-info="commentInfo"/>
      <goods-list :goods="recommend"/>
    </scroll>
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
//引入公共组件
import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
//引入网路请求
import {getDetail, getRecommend , Goods , Shop, GoodsSize} from 'network/detail.js'
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
    Scroll,
    GoodsList
  },
  data() {
    return {
      id: null,
      topImg: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: []
    }
  },
  created() {
    //1.当组件创建时获取当前img中的id参数
    this.id = this.$route.params.id   
    //2.根据id请求数据
    getDetail(this.id).then(res => {
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
      this.commentInfo = data.rate.list[0]
    })
    //3.请求推荐数据
    getRecommend().then((res) => {
      console.log(res);
      this.recommend = res.data.list
    })
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh()
    }
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
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>