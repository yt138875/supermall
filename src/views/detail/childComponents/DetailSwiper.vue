<template>
  <swiper class="detailSwiper">
    <swiper-item v-for="(item,index) in topImg" :key="index">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index.js'
export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImg: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
.detailSwiper{
  height: 250px;
  overflow: hidden;
}
</style>