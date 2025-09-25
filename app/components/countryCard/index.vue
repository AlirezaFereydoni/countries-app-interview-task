<template>
  <div class="w-full box-shadow-md">
    <NuxtImg :src="country.flags.png" :alt="country.flags.alt" sizes="50px" class="w-full h-auto" />

    <div class="flex flex-col gap-2 px-5 py-10">
      <h2 class="mb-2 font-extrabold">{{ country.name.common }}</h2>

      <DescriptionLine label="Population" :value="country.population" />
      <DescriptionLine label="Region" :value="country.region" />
      <DescriptionLine label="Capital" :value="country.capital.join(', ')" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Country } from '~/types';
import DescriptionLine from './DescriptionLine.vue';

const props = defineProps<{
  country: Country;
}>();
</script>
