import type { Country } from '~/types';

export const useFilter = (countries: Ref<Country[] | null | undefined>) => {
  const route = useRoute();
  const router = useRouter();

  const search = ref(route.query.search?.toString() || '');
  const selectedRegion = ref(route.query.region?.toString() || '');
  const sortBy = ref(route.query.sortBy?.toString() || '');

  const updateURL = () => {
    const query: Record<string, string> = {};

    if (search.value) query.search = search.value;
    if (selectedRegion.value) query.region = selectedRegion.value;
    if (sortBy.value) query.sortBy = sortBy.value;

    router.replace({ query });
  };

  watch([search, selectedRegion, sortBy], updateURL, { deep: true });

  const filteredCountries = computed(() => {
    if (!countries.value) return [];

    let filtered = countries.value.filter(country => {
      const matchesSearch = country.name.common.toLowerCase().includes(search.value.toLowerCase());
      const matchesRegion = !selectedRegion.value || country.region === selectedRegion.value;
      return matchesSearch && matchesRegion;
    });

    // Apply sorting
    if (sortBy.value) {
      filtered = [...filtered].sort((a, b) => {
        switch (sortBy.value) {
          case 'name':
            return a.name.common.localeCompare(b.name.common);
          case 'population':
            return b.population - a.population;
          default:
            return 0;
        }
      });
    }

    return filtered;
  });

  const handleRegionChange = (value: string) => {
    selectedRegion.value = value;
  };

  const handleSortChange = (value: string) => {
    sortBy.value = value;
  };

  const updateSearch = (value: string) => {
    search.value = value;
  };

  return {
    search,
    selectedRegion,
    sortBy,
    filteredCountries,
    handleRegionChange,
    handleSortChange,
    updateSearch,
  };
};
