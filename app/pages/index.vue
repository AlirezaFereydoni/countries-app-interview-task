<script setup lang="ts">
import type { Country } from '~/types';
import Input from '~/components/form/Input.vue';
import Select from '~/components/form/Select.vue';

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

const {
  search,
  selectedRegion,
  sortBy,
  filteredCountries,
  handleRegionChange,
  handleSortChange,
  updateSearch,
} = useFilter(countries);

const regionOptions = computed(() => {
  if (!countries.value) return [];

  const regions = [...new Set(countries.value.map(country => country.region))];
  return [...regions.map(region => ({ value: region, label: region }))];
});
</script>

<template>
  <div class="w-full" v-if="countries">
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
      <div class="w-full md:w-100">
        <Input :value="search" :updateValue="updateSearch" placeholder="Search for a country..." />
      </div>

      <div class="grid grid-cols-2 md:flex gap-5 w-full md:w-auto">
        <div class="w-full md:w-40">
          <Select
            :value="sortBy"
            :options="[
              { value: 'name', label: 'Name' },
              { value: 'population', label: 'Population' },
            ]"
            :onChange="handleSortChange"
            placeholder="Sort by"
          />
        </div>

        <div class="w-full md:w-60">
          <Select
            :value="selectedRegion"
            :options="regionOptions"
            :onChange="handleRegionChange"
            placeholder="Filter by Region"
          />
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-20 gap-y-15">
      <CountryCard
        v-for="country in filteredCountries"
        :key="country.name.common"
        :country="country"
        :to="`/${country.name.common.toLowerCase()}`"
      />
    </div>
  </div>

  <Loading v-else-if="pending" />
  <Error v-else-if="error" message="Failed to fetch countries" />
</template>
