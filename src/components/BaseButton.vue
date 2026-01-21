<template>
  <view class="btn" @click="$emit('click')">
    <slot />
  </view>
</template>

<style scoped lang="scss">
.btn {
  background: #007aff;
  color: #fff;
  padding: 20rpx;
  border-radius: 12rpx;
  text-align: center;
}
</style>
