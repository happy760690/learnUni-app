<template>
  <view class="page">
    <BaseCard
      title="TS 组件卡片"
      clickable
      @click="goDetail"
    >
      <text>这是内容区域</text>

      <template #footer>
        <BaseButton>
          查看详情
        </BaseButton>
      </template>
    </BaseCard>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseCard from '@/components/BaseCard.vue'
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
