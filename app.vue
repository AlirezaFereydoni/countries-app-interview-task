<template>
  <div class="app" :data-theme="theme">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useTheme } from '~/composables/useTheme';

const { theme, initializeTheme } = useTheme();

onMounted(() => {
  initializeTheme();
});
</script>

<style scoped>
.app {
  min-height: 100vh;
}
</style>
