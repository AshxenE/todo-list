<template>
  <UiDialog v-if="modelValue">
    <div class="question">
      <div class="question__header">
        <div class="question__header-close">
          <UiIcon
              @click="$emit('update:modelValue', false)"
              value="close"
              width="10px"
              height="10px"
          />
        </div>
      </div>
      <div class="question__body">
        Вы уверены, что хотите удалить <span>{{ name }}?</span>
      </div>
      <div class="question__footer">
        <UiButton @click="$emit('update:modelValue', false)">Отмена</UiButton>
        <UiButton @click="$emit('delete')">Удалить</UiButton>
      </div>
    </div>
  </UiDialog>
</template>

<script setup>
import { defineProps } from "vue";

import UiIcon from "../ui/icon"
import UiButton from "../ui/button"
import UiDialog from "../ui/dialog";

defineProps({
  modelValue: Boolean,
  name: String
})

</script>

<style scoped lang="scss">
@import '../../assets/styles/components/dialogs/question';
</style>
