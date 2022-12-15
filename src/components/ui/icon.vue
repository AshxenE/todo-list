<template>
  <svg :style="{ height, width, color }" >
    <use :href="sprite + '#' + value" />
  </svg>
</template>

<script setup>
import { computed, defineProps } from "vue";
import IconsSprite from '../../assets/svg/icons.svg'

defineProps({
  value: {
    type: String,
    default: ''
  },
  mode: {
    type: String,
    default: 'fill'
  },
  color: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '100%'
  }
})

const sprite = computed(() => {
  return IconsSprite
})
</script>
