<template>
  <swiper>
      <!-- :key="item"的作用是给每一添加一个唯一标识 -->
      <swiper-item v-for="(item,index) in banners" :key="index">
       <a :href="item.link">
         <img :src="item.image" @load="imgLoad">
       </a>
      </swiper-item>
    </swiper>
</template>

<script>
//引入轮播图组件
import {Swiper, SwiperItem} from 'components/common/swiper/index.js'

export default {
  props:{
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods: {
    //监听轮播图加载
    imgLoad() {
      this.$emit('swiperLoad')
    }
  }
}
</script>

<style>

</style>