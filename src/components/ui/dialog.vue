<template>
  <div class="dialog__backdrop">
    <transition name="slide-fade" appear>
      <div class="dialog" :style="{ width: width + 'px' }" >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  width: {
    type: String,
    default: '450',
  }
})
</script>

<style scoped lang="scss">
@import "../../assets/styles/components/ui/dialog";
</style>
