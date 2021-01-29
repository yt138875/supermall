<template>
  <div  class="wrapper" ref="wrapper" >
    <div class="content">
      <slot></slot>
      
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      scroll: null,
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    //1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper,{
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    //2.监听滚动事件
    this.scroll.on('scroll',(position) => {
      this.$emit('scroll',position)
    })
    //3.监听滚动到底部
    this.scroll.on('pullingUp',() => {
      this.$emit('pullingUp')    
    })
  },
  methods: {
    //回到顶部
    scrollTo(x,y,time = 300) {
      this.scroll && this.scroll.scrollTo(x,y,time)
    },   
    //刷新
    refresh() {
      // console.log('aaa');
      this.scroll && this.scroll.refresh()
    },
    //继续使用上拉加载功能
    finishPullUp() {
      this.scroll.finishPullUp()
    },
  }
}
</script>

<style>

</style>