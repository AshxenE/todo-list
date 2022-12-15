<template>
  <label :class="['checkbox',{ disabled: disabled }]">
    <input
        :value="modelValue"
        :checked="checked"
        name="checkbox"
        :disabled="disabled"
        type="checkbox"
        @change="changeValue"
    >
    <span class="checkbox__span" />
    {{ label }}
  </label>
</template>

<script setup>
import { defineProps, defineEmits } from "vue"

const props = defineProps({
  modelValue: {
    type: [String, Boolean],
    default: false
  },
  label: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  checked: {
    type: [String, Boolean],
    default: false,
  }
})
const emit = defineEmits()
emit('update:modelValue')

const changeValue = (e) => {
  if(!props.disabled) {
    emit('update:modelValue', e.target.checked)
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/components/ui/checkbox";
</style>
