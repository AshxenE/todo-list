<template>
  <div :class="['input', {'icon-right': canClear, disabled : disabled}]" :style="{ width: width}">
    <div v-if="label" class="input__label">{{ activeLabel }}</div>
    <div class="input__inner">
      <input
          v-mask="mask"
          :placeholder="placeholder"
          :type="types"
          :value="modelValue"
          :disabled="disabled"
          @input="$emit('update:modelValue', $event.target.value)"
      />
      <transition name="scale" appear>
        <div v-if="canClear && modelValue" class="input__icon-remove">
          <UiIcon width="12px" height="12px" value="close" @click="$emit('update:modelValue', '')"/>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import UiIcon from './icon'

const props = defineProps({
  modelValue: [String, Number],
  placeholder: {
    type: String,
    default: 'Заполните поле',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
  mask: {
    type: String,
    default: '',
  },
  types: {
    type: String,
    default: 'text',
  },
  width: {
    type: String,
    default: '100%',
  },
  canClear: {
    type: Boolean,
    default: false
  }
})

const activeLabel = computed(() => {
  return props.label.split(':').join(' ')
})
</script>

<style lang="scss" scoped>
@import "../../assets/styles/components/ui/input";
</style>
