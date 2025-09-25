<script setup lang="ts">
import type { AxiosError, AxiosResponse } from 'axios';
import type { Country } from '~/types';
import API from '~/utils/service';

const countries = ref<Country[]>([]);

API.get('/all?fields=name,population,region,capital,flags')
  .then((data: AxiosResponse<Country[]>) => {
    console.log('Countries data:', data);
    countries.value = data.data;
  })
  .catch((error: AxiosError<Country[]>) => {
    console.error('API Error:', error);
  });
</script>

<template>
  <div class="w-full">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-20 gap-y-15">
      <CountryCard
        v-for="country in countries"
        :key="country.name.common"
        :country="country"
        :to="`/${country.name.common.toLowerCase()}`"
      />
    </div>
  </div>
</template>
