import { ref, computed, watch } from 'vue';
import type { Theme } from '~/types';

export const useTheme = () => {
  const theme = ref<Theme>('light');

  // Initialize theme from localStorage or system preference
  const initializeTheme = () => {
    if (process.client) {
      const savedTheme = localStorage.getItem('theme') as Theme;
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      theme.value = savedTheme || systemTheme;
      applyTheme(theme.value);
    }
  };

  // Apply theme to document
  const applyTheme = (newTheme: Theme) => {
    if (process.client) {
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    }
  };

  // Toggle theme
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    applyTheme(theme.value);
  };

  // Computed properties
  const isDark = computed(() => theme.value === 'dark');
  const isLight = computed(() => theme.value === 'light');

  // Watch for theme changes
  watch(theme, newTheme => {
    applyTheme(newTheme);
  });

  return {
    theme: readonly(theme),
    isDark,
    isLight,
    toggleTheme,
    initializeTheme,
  };
};
