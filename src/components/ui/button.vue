<template>
  <button class="button" :class="[classes,{ disabled: disabled }]" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  primary: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  }
})

const classes = computed(() => {
    return props.primary ? 'primary' : ''
})
</script>

<style lang="scss" scoped>
@import "../../assets/styles/components/ui/button";
</style>
