<template>
  <div class="flex gap-1 items-center">
    <p class="font-bold">{{ label }}:</p>
    <span class="font-medium">{{ value }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  value: string | number;
}>();
</script>
