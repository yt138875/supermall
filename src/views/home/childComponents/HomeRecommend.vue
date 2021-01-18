<template>
  <div class="recommend">
    <div v-for="(item,i) in recommends" :key="i" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" >
        <div class="recommend-text">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      tpye: Array,
      default() {
        return []
      }
    }
  },
}
</script>

<style>
.recommend{
  display: flex;
  text-align: center;
  font-size: 14px;
  padding: 15px 5px;
  border-bottom: 8px solid#eee;
}
.recommend-item{
  flex: 1;
}
.recommend-item a img{
  width: 95%;
}
.recommend-text{
  margin-top: 2px;
}
</style>