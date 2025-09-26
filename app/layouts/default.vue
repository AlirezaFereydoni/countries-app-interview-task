<template>
  <div class="min-h-screen container-wrapper">
    <header class="shadow-sm header-wrapper">
      <div class="container mx-auto px-6 py-6">
        <div class="flex items-center justify-between">
          <h1 class="text-sm md:text-xl font-extrabold header-title">Where in the world?</h1>
          <button
            @click="toggleTheme"
            class="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer switch-theme-button"
          >
            <Icon :name="isDark ? 'heroicons:sun' : 'heroicons:moon'" class="w-5 h-5" />
            <span class="font-semibold text-sm md:text-lg">
              {{ isDark ? 'Light Mode' : 'Dark Mode' }}
            </span>
          </button>
        </div>
      </div>
    </header>

    <main class="container mx-auto px-6 py-10 md:py-20">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const { isDark, toggleTheme } = useTheme();
</script>

<style scoped>
.container-wrapper {
  background-color: var(--bg-primary);
}
.header-wrapper {
  background-color: var(--bg-secondary);
}
.header-title {
  color: var(--text-primary);
}
.switch-theme-button {
  color: var(--text-primary);
}
</style>
