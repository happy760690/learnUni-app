<template>
  <view class="page">
    <text class="title">{{ title }}</text>

    <BaseButton @click="goDetail">
      去详情页（TS）
    </BaseButton>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import { goDetailPage } from '@/utils/navigation'

// 明确类型
const title = ref<string>('uni-app TS 首页')

let navigating = false;
const goDetail = (): void => {
  if (navigating) return;
  navigating = true;
  goDetailPage(42).finally(() => {
    navigating = false;
  });
}
</script>
