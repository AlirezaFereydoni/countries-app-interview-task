<template>
  <div class="flex gap-1 items-start">
    <p class="font-semibold">{{ title }}:</p>
    <span>{{ value }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  value: string | number;
}>();
</script>
