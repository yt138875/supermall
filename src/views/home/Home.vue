<template>
  <div id="home">
    <nav-bar class="nav-home">
      <template v-slot:center>拼夕夕</template>
    </nav-bar>
    <tab-control 
        :titles="['流行', '新款', '精选']"
        @controlClick="controlClick"
        ref="tabControl1"
        v-show="isTabFixed"
      />
      
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pulling-up="loadMore"
    >
      <home-swiper :banners="banners" @swiperLoad.once="swiperLoad"/>
      <home-recommend :recommends="recommends" />
      <home-popular />
      <tab-control 
        :titles="['流行', '新款', '精选']"
        @controlClick="controlClick"
        ref="tabControl2"
        v-show="!isTabFixed"
      />
      <goods-list :goods="showGoods" @imgitemload="imgItemLoad" />
    </scroll>
    <!-- .native修饰符可以直接监听组件的原生事件 -->
    <back-top @click.native="topClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
//首页子组件
import HomeSwiper from "./childComponents/HomeSwiper"; //轮播圖
import HomeRecommend from "./childComponents/HomeRecommend"; //推荐
import HomePopular from "./childComponents/HomePopular"; //流行

//公共組件
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from 'components/content/backTop/BackTop'

//引入首页home的关于Multidata的网络请求
import { getHomeMultidata, getHomeGoods } from "network/home.js";
export default {
  name: 'Home',
  components: {
    HomeSwiper,
    HomeRecommend,
    HomePopular,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      //定义数组来存放请求过来的数据
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShow: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY:0
    };
  },
  methods: {
    //----事件监听的方法----
    controlClick(index) {
      //获取子组件TabControl传来的index值
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      //使两个控制栏的状态保持一致
      this.$refs.tabControl1.currentItem = index;
      this.$refs.tabControl2.currentItem = index;
    },
    topClick(){
      //this.$refs.scroll可以取到scroll组件的组件对象 调用scroll组件中的 scrollTo方法
      this.$refs.scroll.scrollTo(0,0)
    },
    contentScroll(position) {
      //判断backtop是否显示   通过页面滚动的y值来赋予isShow不同的布尔值
      this.isShow = (-position.y) >= 1000
      //判断tancontrol是否吸顶
      this.isTabFixed = (-position.y) >= this.tabOffsetTop
    },       
    imgItemLoad() {
      this.$refs.scroll.refresh()
    },
    loadMore() {
      //调用homeGoods方法加载更多数据 其中this.currentType为点击选中的类型
      this.homeGoods(this.currentType)
    },
    swiperLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
 
    //----网络请求的方法-----
    homeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    homeGoods(type) {
      //动态获得每次pege变化之后的值
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        //完成上拉加载
        this.$refs.scroll.finishPullUp()
      });
    },

  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  //处于活跃状态时触发
  activated() {
    this.$refs.scroll.scrollTo(0,-this.saveY,0)
    this.$refs.scroll.refresh()
  },
  //离开活跃状态时触发
  deactivated() {
    this.saveY = this.$refs.scroll.y
  },
  //生命周期函数（在组件创建成功时执行）
  created() {
    //请求多个数据
    this.homeMultidata(),
    //请求商品数据
    this.homeGoods("pop");
    this.homeGoods("new");
    this.homeGoods("sell");  
  },
  mounted() {    
  },
  
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.nav-home {
  /* 只用公共样式中定义的变量 */
  background-color: var(--color-tint);
  color: #fff;
  text-align: center!important;
}
.content {
  height: calc(100%);
  overflow: hidden;
}
</style>