<script setup lang="ts">
import { useMachine } from '@xstate/vue'
import { useItemsStore } from '~/stores/items'
import { toggleMachine } from '~/machines/toggleMachine'
import DevLog from '~/utils/DevLog.vue'

const itemsStore = useItemsStore()
const newItemLabel = ref('')
const { state, send } = useMachine(toggleMachine)

function onAddNewItem(label: string) {
  itemsStore.add(label)
  newItemLabel.value = ''
}

function onClick(itemId: number) {
  send('TOGGLE')
}
</script>

<template>
  <div class="grid gap-1" @click="onClick(3)">
    <form @submit.prevent="onAddNewItem(newItemLabel)">
      <input v-model="newItemLabel" type="text" placeholder="need" class="w-full border-2 border-light-50 rounded-full bg-teal-200 px-4 py-4 focus:outline-green-400">
    </form>
    <ul class="grid w-full gap-1 rounded-3xl">
      <TodoItem v-for="(item, index) in itemsStore.sortedItemsTime" :key="index" :label="item.label" />
    </ul>
  </div>
  <DevLog :content="state.value" />
</template>
