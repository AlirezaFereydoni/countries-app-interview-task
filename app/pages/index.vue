<script setup lang="ts">
import type { Country } from '~/types';
const config = useRuntimeConfig();

const {
  data: countries,
  pending,
  error,
} = useAsyncData(
  'countries',
  async () =>
    await $fetch<Country[]>(`${config.public.API_URL}/all`, {
      params: {
        fields: 'name,population,region,capital,flags',
      },
    })
);
</script>

<template>
  <div class="w-full" v-if="countries">
    <!-- <div class="flex items-center justify-between">
      <Input v-model="search" placeholder="Search for a country" />
      <Select v-model="region" :options="regions" placeholder="Select a region" />
    </div> -->

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-20 gap-y-15">
      <CountryCard
        v-for="country in countries"
        :key="country.name.common"
        :country="country"
        :to="`/${country.name.common.toLowerCase()}`"
      />
    </div>
  </div>

  <Loading v-else-if="pending" />
  <Error v-else-if="error" message="Failed to fetch countries" />
</template>
