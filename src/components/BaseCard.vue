<template>
  <view class="card" @click="handleClick">
    <view class="header" v-if="title">
      <text class="title">{{ title }}</text>
    </view>

    <view class="content">
      <slot />
    </view>

    <view class="footer" v-if="$slots.footer">
      <slot name="footer" />
    </view>
  </view>
</template>

<script setup lang="ts">
/**
 * props 类型
 */
interface Props {
  title?: string
  clickable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  clickable: false
})

/**
 * emit 类型（非常重要）
 */
const emit = defineEmits<{
  (e: 'click'): void
}>()

const handleClick = (): void => {
  if (!props.clickable) return
  emit('click')
}
</script>

<style scoped lang="scss">
.card {
  background: #fff;
  border-radius: 16rpx;
  padding: 24rpx;
  margin-bottom: 24rpx;
}
.header {
  margin-bottom: 16rpx;
}
.title {
  font-size: 32rpx;
  font-weight: 600;
}
.footer {
  margin-top: 16rpx;
}
</style>
