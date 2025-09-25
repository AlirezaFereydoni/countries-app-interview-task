<template>
  <div>
    <Button label="Go Back" icon="heroicons:arrow-left" :onClick="goBack" />
    <div v-if="country" class="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-20">
      <NuxtImg :src="country.flags.svg" :alt="country.flags.alt" class="w-full h-110" />
      <div class="px-15 py-10">
        <h2 class="font-extrabold text-4xl">{{ country.name.common }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-1">
          <TitleValue title="Population" :value="formatNumberWithCommas(country.population)" />
          <TitleValue title="Region" :value="country.region" />
          <TitleValue title="Capital" :value="country.capital.join(', ')" />
          <TitleValue title="Languages" :value="Object.values(country.languages).join(', ')" />
          <TitleValue
            title="Currencies"
            :value="
              Object.values(country.currencies)
                .map(currency => currency.name)
                .join(', ')
            "
          />
          <TitleValue title="Subregion" :value="country.subregion" />
          <!-- <TitleValue title="Top Level Domain" :value="country.topLevelDomain.join(', ')" /> -->
        </div>

        <div v-if="country.borders.length > 0" class="flex items-center gap-2">
          <p class="mr-2">Borders:</p>
          <Button
            v-for="border in country.borders"
            :key="border"
            :label="border"
            :onClick="() => goToCountry(border)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AxiosError, AxiosResponse } from 'axios';
import type { CountryDetailed } from '~/types';
import API from '~/utils/service';
import Button from '~/components/atomic/Button.vue';

const { countryName } = useRoute().params;
const router = useRouter();

const goBack = () => router.back();
const goToCountry = (border: string) => router.push(`/${border}`);

const country = ref<CountryDetailed | null>(null);

onMounted(() => {
  API.get(
    `/name/${countryName}?fullText=true&fields=name,population,region,capital,flags,borders,languages,currencies,subregion,topLevelDomain`
  )
    .then((data: AxiosResponse<CountryDetailed[]>) => {
      console.log('Countries data:', data);
      country.value = data.data[0] || null;
    })
    .catch((error: AxiosError<CountryDetailed[]>) => {
      console.error('API Error:', error);
    });
});
console.log('Country:', country.value);
</script>

<style scoped>
.back-button {
  background-color: var(--bg-primary);
}
</style>
