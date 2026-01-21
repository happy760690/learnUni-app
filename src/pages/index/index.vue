<template>
  <view class="page">
    <text class="title">uni-app 模板首页</text>

    <BaseButton @click="goDetail"> 去详情页 </BaseButton>
  </view>
</template>

<script setup>
import BaseButton from "@/components/BaseButton.vue";

let navigating = false;
const goDetail = () => {
  if (navigating) return;
  navigating = true;
  uni.navigateTo({
    url: "/pages/detail/index?id=1",
    complete: () => {
      navigating = false;
    },
  });
};
</script>

<style scoped lang="scss">
.page {
  padding: 32rpx;
}
.title {
  font-size: 36rpx;
  margin-bottom: 40rpx;
}
</style>
