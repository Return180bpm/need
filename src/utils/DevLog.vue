<script setup lang="ts">
import type { StateTypes } from 'xstate'

const { content } = defineProps<{
  content: StateTypes
}>()
</script>

<template>
  <div class="dev">
    <p>
      {{ content }}
    </p>
  </div>
</template>
