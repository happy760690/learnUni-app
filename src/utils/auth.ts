import { useUserStore } from '@/stores/user'

const WHITE_LIST = [
  '/pages/login/index'
]

/**
 * 页面权限校验
 */
export const checkAuth = (currentPath: string): boolean => {
  if (WHITE_LIST.includes(currentPath)) {
    return true
  }

  const userStore = useUserStore()

  if (userStore.token) {
    return true
  }

  // 未登录 → 跳转登录页
  uni.navigateTo({
    url: `/pages/login/index?redirect=${encodeURIComponent(currentPath)}`
  })

  return false
}
