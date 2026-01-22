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
import BaseCard from '@/components/BaseCard.vue'
import { goDetailPage } from '@/utils/navigation'
import { fetchList } from '@/api/list'
import type { ListItem } from '@/types/list'

const list = ref<ListItem[]>([])

const loadData = async (): Promise<void> => {
  list.value = await fetchList()
}

onMounted(loadData)

let navigating = false;
const goDetail = (id: number): void => {
  if (navigating) return;
  navigating = true;
  goDetailPage(id).finally(() => {
    navigating = false;
  });
}
</script>
