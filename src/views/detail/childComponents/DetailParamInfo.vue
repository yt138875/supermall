<template>          
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table v-for="(table, index) in paramInfo.sizes"
           class="info-size" :key="index">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-params" >
      <tr v-for="(info,index) in paramInfo.infos" :key="index">
        <td class="info-params-key">{{info.key}}</td>
        <td class="info-params-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
}
</script>

<style>
.param-info{
  border-top: 5px solid #ccc;
  padding: 20px 15px;
  font-size: 14px;
}
.param-info table{
  border-collapse: collapse;
  width: 100%;
  /* text-align: center; */
}
.param-info table tr{
  height: 42px;
}
.param-info table tr td{
   border-bottom: 1px solid rgba(100,100,100,.1);
}
.info-params{
  border-top: 2px solid  rgba(100,100,100,.1);
}
.info-params-key {
  /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
  width: 70px;
}
.info-params-value{
  color: #eb4868;
}
.info-img img{
  width: 100%;
}
</style>