<template>
  <view class="page">
    <input
      v-model="username"
      placeholder="用户名：admin"
    />
    <input
      v-model="password"
      placeholder="密码：123456"
      password
    />

    <BaseButton @click="handleLogin">
      登录
    </BaseButton>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import BaseButton from '@/components/BaseButton.vue'
import { login } from '@/api/auth'
import { useUserStore } from '@/stores/user'

const username = ref('')
const password = ref('')
const redirect = ref<string>('')

const userStore = useUserStore()

onLoad((query: Record<string, string>) => {
  const raw = query.redirect || ''
  try {
    redirect.value = raw ? decodeURIComponent(raw) : ''
  } catch (e) {
    // fallback if decode fails
    redirect.value = raw
  }
})

const handleLogin = async (): Promise<void> => {
  try {
    uni.showLoading({ title: '登录中' })

    const res = await login({
      username: username.value,
      password: password.value
    })

    userStore.setToken(res.token)

    console.log('redirect.value', redirect.value)
    if (redirect.value) {
        uni.redirectTo({
            url: redirect.value
        })
    } else {
        uni.navigateBack()
    }
    uni.showToast({ title: '登录成功' })
  } catch (err: any) {
    uni.showToast({
      title: err.message || '登录失败',
      icon: 'none'
    })
  } finally {
    uni.hideLoading()
  }
}
</script>

<style scoped>
.page {
  padding: 32rpx;
}
input {
  border: 1px solid #ccc;
  margin-bottom: 24rpx;
  padding: 16rpx;
}
</style>
