<template>
  <div class="flex justify-center items-center min-h-screen h-full">
    <p class="text-red-500 text-center">⚠️ {{ message }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  message: string;
}>();
</script>
