<template>
  <div class="check-button" :class="{check: isSelected}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  props: {
    isSelected: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.check-button{
  border-radius: 50%;
  width: 18px;
  height: 18px;
  border: 2px solid #ccc;
}
.check{
  background-color: red;
  border: 1px solid red;
}
</style>