// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss() as any],
  },

  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/test-utils'],

  app: {
    head: {
      title: 'REST Countries API',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A REST Countries API application with dark/light mode' },
      ],
    },
  },

  runtimeConfig: {
    public: {
      API_URL: 'https://restcountries.com/v3.1',
    },
  },

  fonts: {
    families: [
      {
        name: 'Nunito Sans',
        provider: 'google',
        weights: [300, 600, 800],
      },
    ],
  },

  ssr: true,
});
