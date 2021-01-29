<template>
  <div class="category-content">
    <div class="item"
         v-for="(item,index) in subcategories.list" 
         :key="index">
      <a :href="item.link">
        <img class="item-img" :src="item.image" @load="imgLoad" alt="">
        <div class="item-title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subcategories: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    imgLoad() {
      if(++this.counter === this.subcategories.list.length){
        this.$emit('imgLoad')
      }
    }
  }
}
</script>

<style scoped>
.category-content{
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
}
.item{
  width: 100px;
  height: 100px;
  margin-bottom: 30px;
}
.item-img{
  width: 100%;
}
.item-title{
  text-align: center;
  font-size: 15px;
}
</style>