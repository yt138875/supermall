<template>
  <div id="category">
    <nav-bar class="nav-category">
      <template v-slot:center>商品分类</template>
    </nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem" />
      <scroll id="tab-content" ref="scroll" >
        <tab-category-content 
           :subcategories="showSubCategory"
           @imgLoad="imgLoad"/>
      </scroll>
    </div>

  </div>
</template>

<script>
import TabMenu from "./childComponents/TabMenu";
import TabCategoryContent from './childComponents/TabCategoryContent'

import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import {getCategory,getSubcategory,getCategoryDetail} from "network/category";

export default {
  components: {
    TabMenu,
    TabCategoryContent,
    NavBar,
    Scroll,
  },
  data() {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1
    };
  },
  created() {
    this._getCategory();
  },
  computed: {
    //将subcategories传入TabCategoryContent组件
    showSubCategory() {
      if(this.currentIndex === -1) return {}
      return this.categoryData[this.currentIndex].subcategories
    }
  },
  methods: {
    _getCategory() {
      getCategory().then((res) => {
        // 1.获取分类数据
        this.categories = res.data.category.list;
        // console.log(res);
        // 2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              pop: [],
              new: [],
              sell: [],
            },
          };
        }
        // 3.请求第一个分类的数据
        this._getSubcategories(0);
      });
    },
    //请求所点击的分类里的数据
    _getSubcategories(index) {
      this.currentIndex = index;
      const mailKey = this.categories[index].maitKey;
      //获取分类中的数据
      getSubcategory(mailKey).then((res) => {
        this.categoryData[index].subcategories = res.data;
        this.categoryData = { ...this.categoryData };
        // this._getCategoryDetail('pop');
        // this._getCategoryDetail('sell');
        // this._getCategoryDetail('new');
      });
    },
    // _getCategoryDetail(type) {
    //   // 1.获取请求的miniWallkey
    //   const miniWallkey = this.categories[this.currentIndex].miniWallkey;
    //   // 2.发送请求,传入miniWallkey和type
    //   getCategoryDetail(miniWallkey, type).then((res) => {
    //     // 3.将获取的数据保存下来
    //     this.categoryData[this.currentIndex].categoryDetail[type] = res;
    //     this.categoryData = { ...this.categoryData };
    //   });
    // },
    selectItem(index) {
      this._getSubcategories(index);
      this.imgLoad()
      // console.log(index);
    },
    imgLoad() {
      this.$refs.scroll.refresh()
      // console.log('图片加载完刷新');
    }
  }
};
</script>
  
<style scoped>
#category {
  height: 100vh;
}
.nav-category {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}
.content{
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
  display: flex;
}
#tab-content{
  height: 100%;
  flex: 1;
}
</style>