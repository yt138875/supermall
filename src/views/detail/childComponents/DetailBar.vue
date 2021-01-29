<template>
  <div class="detail-bar">
    <nav-bar >
      <template  v-slot:left >
        <div class="return"></div>
        <div  @click="backClick"><div class="return"></div></div>
      </template>
      <template  v-slot:center>
        <div class="item-center">
          <div class="item" 
             v-for="(item,index) in titles" :key="index"
             :class="{active: index === currentIndex}"
             @click="indexClick(index)">
          {{item}}
          </div>
        </div>
      </template>
    </nav-bar>

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  methods: {
    //点击切换选中的参数
    indexClick(index) {
      this.currentIndex = index
      //将index发送出去
      this.$emit('barIndex',index)
    },
    //点击返回上一个路由（返回上一页）
    backClick() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped >
.item-center{
 display: flex;
 font-size: 14px;
}
.item{
  flex: 1;
}
.return{
  position: absolute;
}
.return:before{
  position: absolute;
  left: 25px;
  top: 12px;
  content: '';
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  /* 给一个padding值撑开盒子让边框显示出来 */
  padding: 7px;
  transform: rotate(135deg);
}
.active {
  color: var(--color-high-text);
}

</style>