<template>
  <div>
    <Button label="Go Back" icon="heroicons:arrow-left" :onClick="goBack" />

    <div v-if="country" class="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-20">
      <NuxtImg
        :src="country.flags.svg"
        :alt="country.flags.alt"
        class="w-full md:h-110 object-cover"
      />

      <div class="md:px-15 md:py-10">
        <h2 class="font-extrabold text-2xl md:text-4xl">{{ country.name.common }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div class="flex flex-col gap-3">
            <TitleValue
              title="Native Name"
              :value="
                Object.values(country.name.nativeName)
                  .map(name => name.common)
                  .join(', ')
              "
            />
            <TitleValue title="Population" :value="formatNumberWithCommas(country.population)" />
            <TitleValue title="Region" :value="country.region" />
            <TitleValue title="Sub Region" :value="country.subregion" />
            <TitleValue title="Capital" :value="country.capital?.join(', ')" />
          </div>

          <div class="flex flex-col gap-3">
            <TitleValue title="Top Level Domain" :value="country.tld?.join(', ')" />
            <TitleValue
              title="Currencies"
              :value="
                Object.values(country.currencies || {})
                  .map(currency => currency.name)
                  .join(', ')
              "
            />
            <TitleValue
              title="Languages"
              :value="Object.values(country.languages || {}).join(', ')"
            />
          </div>
        </div>

        <div
          v-if="country.borders?.length"
          class="grid grid-cols-1 md:flex md:items-center gap-5 mt-10"
        >
          <p class="font-semibold">Border Countries:</p>
          <div class="flex items-center gap-2 overflow-x-auto p-1">
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

    <Loading v-if="pending" />
    <Error v-else-if="error" message="This Country is not found" />
  </div>
</template>

<script setup lang="ts">
import type { CountryDetailed } from '~/types';
import Button from '~/components/form/Button.vue';
import TitleValue from '~/components/atomic/TitleValue.vue';
import Loading from '~/components/atomic/Loading.vue';
import Error from '~/components/atomic/Error.vue';

const config = useRuntimeConfig();

const route = useRoute();
const router = useRouter();
const countryName = route.params.countryName as string;

const goBack = () => router.back();
const goToCountry = (border: string) => router.push(`/${border}`);

const {
  data: country,
  pending,
  error,
} = await useAsyncData(
  () => `country-${countryName}`,
  async () => {
    const res = await $fetch<CountryDetailed[]>(`${config.public.API_URL}/name/${countryName}`, {
      params: {
        fullText: true,
        fields: 'name,population,region,capital,flags,borders,languages,currencies,subregion,tld',
      },
    });
    return res[0];
  }
);
</script>
