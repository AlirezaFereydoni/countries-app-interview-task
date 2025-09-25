<template>
  <div class="app" :data-theme="theme">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '~/composables/useTheme';

const { theme } = useTheme();
</script>

<style scoped>
.app {
  min-height: 100vh;
}
</style>
