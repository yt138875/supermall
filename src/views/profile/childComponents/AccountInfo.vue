<template>
  <div class="account">
    <div class="account-item">
      <div class="account-top">
        <span class="balance">0.00</span>元
      </div>
      <span>我的余额</span>
    </div>
    <div class="preferential account-item">
      <div class="account-top">
        <span class="balance">0</span>个
      </div>
      <span>我的优惠</span>
    </div>
    <div class="account-item">
      <div class="account-top">
        <span class="balance">0</span>分
      </div>
      <span>我的积分</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.account{
  display: flex;
  font-size: 14px;
}
.account-item{
  flex: 1;
  text-align: center;
  padding: 20px 0;
  background-color: #fff;
}
.account-top{
  margin-bottom: 3px;
}
.balance{
  font-size: 22px;
  font-weight: 700;
  color: #ff5f3e;
}

.preferential{
  border-left:1px solid rgb(241, 238, 238) ;
  border-right:1px solid  rgb(241, 238, 238) ;
}
</style>