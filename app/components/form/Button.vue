<template>
  <button
    @click="onClick"
    class="px-4 py-2 flex items-center gap-2 rounded shadow-sm cursor-pointer min-w-25 text-center justify-center button"
  >
    <Icon v-if="icon" :name="icon" class="w-4 h-4" />
    <p>{{ label }}</p>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  onClick: () => void;
  icon?: string;
}>();
</script>

<style scoped>
.button {
  background-color: var(--bg-secondary);
}
</style>
