<template>
  <view class="page">
    <BaseCard
      v-for="item in list"
      :key="item.id"
      :title="item.title"
      clickable
      @click="goDetail(item.id)"
    >
      <text>{{ item.desc }}</text>
    </BaseCard>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { onShow, onPullDownRefresh } from '@dcloudio/uni-app'
import BaseCard from '@/components/BaseCard.vue'
import { fetchList } from '@/api/list'
import type { ListItem } from '@/types/list'
import { goDetailPage } from '@/utils/navigation'
import { checkAuth } from '@/utils/auth'

const list = ref<ListItem[]>([])

const loadData = async (): Promise<void> => {
  try {
    uni.showLoading({ title: '加载中' })
    list.value = await fetchList()
  } finally {
    uni.hideLoading()
    uni.stopPullDownRefresh()
  }
}

onShow(() => {
  const canAccess = checkAuth('/pages/list/index')
  // if (!canAccess) return
  if (!canAccess) {
    uni.redirectTo({
      url: '/pages/login/index?redirect=' + encodeURIComponent('/pages/list/index')
    })
  }
})

onMounted(loadData)
onPullDownRefresh(loadData)

const goDetail = (id: number): void => {
  goDetailPage(id)
}
</script>

<style scoped>
.page {
  padding: 24rpx;
}
</style>
