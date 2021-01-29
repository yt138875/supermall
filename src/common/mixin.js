//混入
import BackTop from 'components/content/backTop/BackTop'



//home与detail中的 item图片加载
export const itemImgLoad = {
  methods: {
    imgItemLoad() {
      this.$refs.scroll.refresh()
    }
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    topClick(){
      //this.$refs.scroll可以取到scroll组件的组件对象 调用scroll组件中的 scrollTo方法
      this.$refs.scroll.scrollTo(0,0)
    }
  }
}