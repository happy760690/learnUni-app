<template>
  <view class="page">
    <text>详情页，id：{{ id }}</text>
  </view>
</template>

<script setup>
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";

const id = ref("");

onLoad((query) => {
  id.value = query.id;
});
</script>
