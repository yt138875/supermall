<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="info-header">
      <div class="user-title">用户评价</div>
      <div class="user-more">
        更多
        <span class="click-more"></span>
      </div>
    </div>
    <div class="user-info" >
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p class="comment">{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{showDate(commentInfo.created)}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
    </div>
    <div class="comment-img">
       <img :src="item" v-for="(item,index) in commentInfo.images" :key="index" alt="">
    </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils.js'
export default {
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    showDate(value) {
      //1.将时间戳转换成date对象 由于js内部使用毫秒,Unix时间戳使用秒，所以要*1000
      const date = new Date(value * 1000)
      //2.将date格式化
      return formatDate(date,'yyyy-MM-dd hh:mm:ss')
    }
  }
}
</script>

<style scoped>
.comment-info{
  padding: 0 8px;
  border-top: 4px solid rgb(226, 221, 221);
  background-color: rgb(247, 245, 242);
}
.info-header{
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid rgb(236, 232, 232);
  padding: 10px 0;
  margin-bottom: 3px;
}
.click-more{
  display: inline-block;
  padding: 4px;
  border: 1px solid;
  border-width: 2px 2px 0 0;
  transform: rotate(45deg);
  position: relative;
  right: 5px;
}
.user-info{
  display: flex;
  align-items: center;
  font-size: 14px;
}
.user-info img {
  margin-right: 3px;
  width: 42px;
  height: 42px;
}
.info-detail{
  font-size: 13px;
  color: rgb(53, 52, 52);
}
.info-other{
  padding: 5px 0;
  color: rgb(161, 159, 159);
}
.date{
  margin-right: 8px;
}
.comment-img img{
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>