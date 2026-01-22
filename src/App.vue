<script setup lang="ts">
import { onLaunch } from '@dcloudio/uni-app'
import { initApp } from '@/app/init'

onLaunch(async () => {
  const state = await initApp()
  console.log('App Ready', state)
})
// 页面永远假设 App 已准备好
</script>

<style lang="scss">
  @import "@/uni.scss";
/*每个页面公共css */
</style>
