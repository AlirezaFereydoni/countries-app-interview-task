<template>
  <div class="min-h-screen" style="background-color: var(--bg-primary)">
    <!-- Header -->
    <header class="shadow-sm" style="background-color: var(--bg-secondary)">
      <div class="container mx-auto px-4 py-6">
        <div class="flex items-center justify-between">
          <h1 class="text-xl font-extrabold" style="color: var(--text-primary)">
            Where in the world?
          </h1>
          <button
            @click="toggleTheme"
            class="flex items-center gap-2 hover:opacity-80 transition-opacity"
            style="color: var(--text-primary)"
          >
            <Icon :name="isDark ? 'heroicons:sun' : 'heroicons:moon'" class="w-5 h-5" />
            <span class="font-semibold">
              {{ isDark ? 'Light Mode' : 'Dark Mode' }}
            </span>
          </button>
        </div>
      </div>
    </header>

    <main class="container mx-auto px-5 py-20">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const { isDark, toggleTheme } = useTheme();
</script>
