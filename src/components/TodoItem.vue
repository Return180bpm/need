<script setup lang="ts">
const { label } = defineProps<{
  label: string
}>()
</script>

<template>
  <li class="w-full rounded-full bg-teal-800 py-1 pl-1">
    <div class="h-full w-4/6 truncate rounded-full bg-teal-200 px-8 py-4">
      <span>{{ label }}</span>
    </div>
  </li>
</template>
