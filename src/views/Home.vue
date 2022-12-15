<template>
  <div class="home">
    <div class="container">
      <todo-list />
      <div class="home__add"  @click="addItem">
        <UiIcon value="plus" width="18px" height="18px" class="home__add-image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import TodoList from '../components/common/toDoList'
import UiIcon from '../components/ui/icon'
import { useRouter } from 'vue-router'

const router = useRouter()

const addItem = () => {
  router.push({ name: 'Task' })
}
</script>

<style scoped lang="scss">
@import "../assets/styles/views/home";
</style>
