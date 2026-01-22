<template>
  <view class="page">
    <text>详情页 ID：{{ id }}</text>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

// 明确类型
const id = ref<number | null>(null)

// query 默认是 Record<string, string>
onLoad((query: Record<string, string>) => {
  id.value = Number(query.id)
})
</script>
