<template>
  <div class="user-info">
    <div class="user-img">
      <img src="~assets/img/profile/avatar.svg" alt="">
    </div>
    <div class="info">
      <div class="login">登录/注册</div>
      <div class="phone">
        <img src="~assets/img/profile/phone.svg" alt="">
        <span>暂无绑定的手机号</span>
      </div>
    </div>
    <span class="arrow"></span>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.user-info{
  display: flex;
  position: relative;
}
.user-img{
  padding: 10px 20px;
}
.user-img img{
  width: 55px;
}
.login{
  margin: 15px 0 0;
}
.phone img{
  width: 22px;
  height: 34px;
  vertical-align: middle;
  margin-left: -5px;
}
.phone span{
  font-size: 13px;
}
.arrow{
  height: 16px;
  width: 16px;
  border: solid #fff;
  border-width: 2px 2px 0 0;
  transform: rotate(45deg);

  position: absolute;
  top: 30px;
  right: 20px;
}
</style>