<template>
  <div id="profile">
    <div class="profile-top">
      <nav-bar class="nav-profile">
        <template v-slot:center>个人中心</template>
      </nav-bar>
      <user-info />
    </div>
    <account-info />
    <function-info :list-data="orderList"/>
    <function-info :list-data="serviceList"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import UserInfo from "./childComponents/UserInfo";
import AccountInfo from "./childComponents/AccountInfo";
import FunctionInfo from "./childComponents/FunctionInfo";
export default {
  components: {
    NavBar,
    UserInfo,
    AccountInfo,
    FunctionInfo,
  },
  data() {
    return {
      orderList: [
        { icon: "message.svg", info: "我的消息" },
        { icon: "pointer.svg", info: "积分商城" },
        { icon: "vip.svg", info: "会员卡" },
      ],
      serviceList: [
        { icon: "cart.svg", info: "我的购物车" },
        { icon: "shopping.svg", info: "下载购物APP" },
      ],
    };
  },
};
</script>

<style scoped>
#profile {
  background-color: #f2f2f2;
}
.profile-top {
  background-color: var(--color-tint);
  font-size: 18px;
  color: #fff;
}
.nav-profile {
  box-shadow: none;
}
</style>