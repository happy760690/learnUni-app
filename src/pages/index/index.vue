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
    <BaseButton @click="handleTakePhoto">
    打开相机
    </BaseButton>
    <BaseButton @click="handlePickFile">
    选择文件
    </BaseButton>
    <BaseButton @click="handlePickImage">
    选择图片
    </BaseButton>
    <BaseButton @click="handleUpload">
    上传图片
    </BaseButton>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BaseCard from '@/components/BaseCard.vue'
import { goDetailPage } from '@/utils/navigation'
import { fetchList } from '@/api/list'
import type { ListItem } from '@/types/list'
import { useSystemInfo } from '@/utils/system'
import { showSuccess } from '@/utils/toast'
import { useNetworkInfo } from '@/utils/network'
import { useUserInfoPermission } from '@/utils/permission'
import { useCamera } from '@/utils/camera'
import BaseButton from '@/components/BaseButton.vue'
import { useFilePicker } from '@/utils/file'
import { pickAndUpload } from '@/utils/fileFlow'

const list = ref<ListItem[]>([])

const loadData = async (): Promise<void> => {
  list.value = await fetchList()
  showSuccess('加载成功')
}

onMounted(() => {
  const info = useSystemInfo()
  console.log('系统信息：', info)
})

onMounted(async () => {
  const net = await useNetworkInfo()
  console.log('网络状态：', net)
})

onMounted(async () => {
  const { status } = await useUserInfoPermission()
  console.log(status)
  if (status !== 'authorized') {
    uni.showModal({
      title: '权限提示',
      content: '需要授权才能继续使用',
      success: (res) => {
        if (res.confirm) {
          uni.openSetting()
        }
      }
    })
  }
})


onMounted(loadData)

const handleUpload = async () => {
  const files = await pickAndUpload('image')
  console.log('上传结果', files)
}

const handlePickImage = async () => {
  const files = await useFilePicker('image')
  console.log('选择的图片', files)
}

const handlePickFile = async () => {
  const files = await useFilePicker('file')
  console.log('选择的文件', files)
}
const handleTakePhoto = async () => {
  const photo = await useCamera()
  if (!photo) return

  console.log('拍照结果', photo)
}

let navigating = false;
const goDetail = (id: number): void => {
  if (navigating) return;
  navigating = true;
  goDetailPage(id).finally(() => {
    navigating = false;
  });
}
</script>
