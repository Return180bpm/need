<script setup lang="ts">
import { useItemsStore } from '~/stores/items'

const itemsStore = useItemsStore()
const newItemLabel = ref('')

function onAddNewItem(label: string) {
  itemsStore.add(label)
  newItemLabel.value = ''
}
</script>

<template>
  <div class="grid gap-1">
    <form @submit.prevent="onAddNewItem(newItemLabel)">
      <input v-model="newItemLabel" type="text" placeholder="need" class="border-2 border-light-50 rounded-full bg-teal-200 px-4 py-4 focus:outline-green-400">
    </form>
    <ul class="grid w-full gap-1 rounded-3xl">
      <TodoItem v-for="item in itemsStore.sortedItems" :key="item._id" :label="item.label" />
    </ul>
  </div>
</template>
