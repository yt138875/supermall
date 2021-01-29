<template>
  <div class="detail-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc clear-fix ">
      <div class="first "></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end "></div>
    </div>
    <div class="keys">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-img">
      <img  v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" 
      :src="item" alt=""
      @load="imgLoad">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      counter: 0,
      //记录图片的总张数
      imageLength: 0
    }
  },
  methods: {
    imgLoad() {
      //判断当前的counter值是否与图片的个数一样，如果不一样则让counter++，这样可以只发送一次事件
      if(++this.counter === this.imageLength) {
        console.log('-----');
        this.$emit('imageLoad')
      }     
    }
  },
  watch: {
    detailInfo() {
      this.imageLength = this.detailInfo.detailImage[0].list.length
    }
  }

}
</script>

<style>
.detail-info{
  padding: 20px 0;
}
.info-desc{
  padding: 0 15px;
}
.desc{ 
  color: rgb(92, 88, 88);
  padding: 6px 0;
  font-size: 14px;
}
.first,.end{
  width: 40%;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}
.first{
  float: left;
}
.end{
  float: right;
}
.first::before ,.end::after{
  content: '';
  position: absolute;
  top: -1px;
  width: 4px;
  height: 4px;
  background-color: black;
}
.end::after{
  right: 0;
}
.keys{
  font-size: 15px;
  color: #000;
  margin: 10px 0 10px 15px;
}
.info-img img{  
  width: 100%;
}
</style>