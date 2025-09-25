<template>
  <NuxtLink :to="`/${country.name.official.toLowerCase()}`">
    <div class="w-full shadow-md rounded-lg overflow-hidden country-card">
      <NuxtImg
        :src="country.flags.png"
        :alt="country.flags.alt"
        loading="lazy"
        sizes="50px"
        class="w-full h-50 shadow-xs"
      />

      <div class="flex flex-col gap-2 px-8 py-10">
        <h2 class="mb-2 font-extrabold">{{ country.name.common }}</h2>

        <TitleValue title="Population" :value="formatNumberWithCommas(country.population)" />
        <TitleValue title="Region" :value="country.region" />
        <TitleValue title="Capital" :value="country.capital.join(', ')" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Country } from '~/types';
import TitleValue from '../atomic/TitleValue.vue';

defineProps<{
  country: Country;
}>();
</script>

<style scoped>
.country-card {
  background-color: var(--bg-secondary);
}
</style>
