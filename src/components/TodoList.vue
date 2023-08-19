<script setup lang="ts">
import { useItemsStore } from '~/stores/items'

const itemsStore = useItemsStore()
</script>

<template>
  <ul class="grid w-full gap-1 rounded-3xl outline-light-50 outline">
    <TodoItem v-for="item in itemsStore.sortedItems" :key="item._id" :label="item.label" />
  </ul>
</template>
