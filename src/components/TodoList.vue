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
  <div v-for="item in items" :key="item._id">
    {{ item.label }}
  </div>
</template>
