<template>
  <div class="list-task">
      <div class="container">
        <div class="list-task__wrap">
          <p class="list-task__title">{{ id ? 'Редактирование' : 'Добавить' }}</p>
          <div class="list-task__header">
            <UiInput v-model="item.title" />
          </div>
          <div class="list-task__content">
            <div v-for="(el, key) in item.items" :key="key" class="list-task__content-item">
              <div class="task-content__item">
                <UiCheckbox :checked="el.checked" @change="el.checked = !el.checked" />
                <UiInput v-model="el.name" />
              </div>
              <div class="task-content__item">
                <UiInput v-model="el.date" mask="00.00.0000" />
                <UiIcon @click="deleteItem(el)" value="delete" width="18px" height="18px" />
              </div>
            </div>
          </div>
          <div class="list-task__footer">
            <UiButton @click="addItem">Добавить задачу</UiButton>
            <UiButton @click="saveNotes">{{ id ? 'Сохранить' : 'Добавить' }}</UiButton>
            <UiButton @click="cancel">Отменить</UiButton>
          </div>
        </div>
      </div>
  </div>
</template>

<script setup>
import { computed, defineProps, reactive } from "vue"
import { useStore } from "@/store"
import router from "../router";

import UiInput from "../components/ui/input"
import UiIcon from "../components/ui/icon"
import UiButton from "../components/ui/button"
import UiCheckbox from "../components/ui/checkbox"

const props = defineProps({
  id: {
    type: [Number, String],
    default: '',
  },
})

const store = useStore()

let item = reactive({
  title: '',
  count: 3,
  items: [
    {
      id: 1,
      name: '',
      date: '',
    }
  ]
})

if (localStorage.getItem('list')) {
  store.setList()
}

const todoLists = computed(() => {
  return store.list
})

if (props.id) {
  item = todoLists.value.find(val => +val.id === +props.id)
  if (!item.items || !item.items.length) {
    item.items = [
      {
        id: 1,
        name: '',
        date: '',
      }
    ]
  }
}

const addItem = () => {
  const lastItem = item.items.at(-1)
  let id = 1

  if (lastItem && lastItem.id) {
    id = lastItem.id + 1
  }

  item.items.push({
    id,
    name: '',
    date: '',
  })
}

const deleteItem = (el) => {
  item.items = item.items.filter(val  => val.id !== el.id)
}

const cancel = () => {
  router.push({ name: 'Home' })
}

const saveNotes = () => {
  if (props.id) {
    store.saveListItem(item)
  } else {
    item.id = todoLists.value.at(-1).id + 1
    store.addListItem(item)
  }

  router.push({ name: 'Home' })
}
</script>

<style scoped lang="scss">
@import "../assets/styles/views/task";
</style>
