<template>
  <div class="function-info">
    <div class="item" v-for="(item,index) in listData" :key="index">
      <img class="info-img" :src="imgURL(item)" alt="">
      <span class="info">{{item.info}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listData: {
      type: Array,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgURL(item) {
      //vue的js代码块中引入图片需要使用require('路径')
      return require('assets/img/profile/' + item.icon)
    }
  }
}
</script>

<style scoped>
.function-info{
  background-color: #fff;
  margin-top: 13px;
}
.item{
  height: 45px;
  line-height: 45px;
  border-bottom: 1px solid rgb(233, 229, 229);

  position: relative;
}
.info-img{
  width: 20px;
  height: 20px;
  position: absolute;
  top: 12px;
  left: 20px;
}
.info{
  margin-left: 50px;
}
</style>