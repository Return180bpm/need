<script setup lang="ts">
const items = [
  {
    _id: 1,
    label: 'foo',
  },
  {
    _id: 2,
    label: 'bar',
  },
]
</script>

<template>
  <ul class="grid w-full gap-1 rounded-3xl outline-light-50 outline">
    <TodoItem v-for="item in items" :key="item._id" :label="item.label" />
  </ul>
</template>
