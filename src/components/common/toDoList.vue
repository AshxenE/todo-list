<template>
  <div class="list">
    <div v-for="(item, key) in todoLists" :key="key" class="list__wrap">
      <div class="list__header">
        <div class="list__header-title">
          {{ item.title }}
        </div>
        <div class="list__context">
          <UiIcon
              @click="editItem(item)"
              value="edit"
              width="18px"
              height="18px" />
          <UiIcon
              @click="deleteItem(item, false)"
              value="delete"
              width="18px"
              height="18px"
          />
        </div>
      </div>
      <ListItem
          v-for="(el, key) in item.items"
          :key="key"
          :item="el"
          v-show="key < item.count"
      />
      <div
          v-if="item.items.length > item.count"
          class="list__context-all"
          @click="showAll(item)"
      >
        Еще {{ item.items.length - item.count }}
      </div>
    </div>
    <QuestionDialog
        v-model="showQuestionDialog"
        :name="selectedItem.title"
        @delete="deleteItem(selectedItem, true)"
    />
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import { useStore } from "@/store"
import { useRouter } from "vue-router"

import ListItem from "./listItem";
import QuestionDialog from "../dialogs/question";
import UiIcon from "../ui/icon";

const store = useStore()
const router = useRouter()
const showQuestionDialog = ref(false)
const selectedItem = ref({})

if (localStorage.getItem('list')) {
  store.setList()
} else {
  store.setStorageList()
}

const todoLists = computed(() => {
  return store.list
})

const editItem = (item) => {
  item.count = 3
  router.push({name: 'TaskItem', params: { id: item.id }})
}

const showAll = (item) => {
  item.count = item.items.length
}

const deleteItem = (item, opened) => {
  if (opened) {
    store.deleteListItem(item)
    showQuestionDialog.value = false
  } else {
    selectedItem.value = item
    showQuestionDialog.value = true
  }
}

const rollBackItem = () => {
  const items = JSON.parse(localStorage.getItem('deletedItems'))

  if (items && items.length) {
    const item = items.at(-1)
    store.rollBackItem(item)
  }
}

const keyupHandler = (event) => {
  if (event.ctrlKey && event.key === 'z') {
    rollBackItem()
  } else if (event.key === 'Escape') {
    rollBackItem()
  }
}

onMounted(() => {
  document.addEventListener('keyup', keyupHandler)
})
</script>

<style scoped lang="scss">
@import "../../assets/styles/components/common/toDoList";
</style>
