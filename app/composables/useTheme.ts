import { ref, computed, watch, readonly } from 'vue';
import type { Theme } from '~/types';

const theme = ref<Theme>('light');
let isInitialized = false;

const applyTheme = (newTheme: Theme) => {
  if (import.meta.client) {
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }
};

const initializeTheme = () => {
  if (import.meta.client && !isInitialized) {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    theme.value = savedTheme || systemTheme;
    applyTheme(theme.value);
    isInitialized = true;
  }
};

onMounted(() => {
  if (import.meta.client) {
    initializeTheme();
  }
});

watch(theme, newTheme => {
  applyTheme(newTheme);
});

export const useTheme = () => {
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  };

  const isDark = computed(() => theme.value === 'dark');
  const isLight = computed(() => theme.value === 'light');

  return {
    theme: readonly(theme),
    isDark,
    isLight,
    toggleTheme,
    initializeTheme,
  };
};
