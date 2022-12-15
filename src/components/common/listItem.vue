<template>
  <div :class="['list__item', { checked: item.checked }]">
    <div class="list__item-left">
      <UiCheckbox disabled :checked="item.checked" />
      <div class="list__item-name">{{ item.name }}</div>
      <span v-if="item.checked" class="list__item-tooltip">выполнено</span>
    </div>
    <div class="list__item-date">{{ item.date }}</div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

import UiCheckbox from "../ui/checkbox"

defineProps({
  item: {
    type: Object,
    default: () => {
      return { name: '', date: '' }
    }
  }
})
</script>

<style scoped lang="scss">
@import "../../assets/styles/components/common/listItem";
</style>
