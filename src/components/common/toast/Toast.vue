<template>
  <div v-show="isToastShow" class="toast">
    <div>
      {{message}}    
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: ''
    },
    isToastShow: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  transform:translate(-50%);
  background:rgba(0, 0, 0, .8);
  padding: 7px 13px;
  z-index: 999;
  color: #fff;
}
</style>