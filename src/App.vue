<template>
  <div id="app">
    <main-tab-bar/>  

      <!-- <router-view/> -->

    <router-view v-slot="{ Component }">
      <keep-alive exclude="Detail">
        <component :is="Component" />
        </keep-alive>
    </router-view>

  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'
export default {
  name: 'app',
  components: {
    MainTabBar,
  }
}
</script>
<style>
/* 引用css样式 */
  @import "assets/css/base.css";
</style>
