<template>
  <view class="page">
    <BaseCard
      v-for="item in fileList"
      :key="item.id"
      :title="item.name"
      clickable
    >
        <cover-image class="controls-play img" :src="item.path"></cover-image>
    </BaseCard>
    <BaseButton @click="handleCamera">
        打开相机
    </BaseButton>
    <BaseButton @click="handlePickImage">
        选择图片
    </BaseButton>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { AppFile } from '@/types/file'
import BaseCard from '@/components/BaseCard.vue'
import BaseButton from '@/components/BaseButton.vue'
import {
  takePhotoAndUpload,
  pickFilesAndUpload
} from '@/utils/mediaFlow'

const fileList = ref<AppFile[]>([])

const handleCamera = async () => {
  const files = await takePhotoAndUpload()
  fileList.value.push(...files)
}

const handlePickImage = async () => {
  const files = await pickFilesAndUpload('image')
  fileList.value.push(...files)
}


</script>
