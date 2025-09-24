<template>
  <div>
    <h1 class="text-2xl font-bold bg-sky-500 text-primary">Country {{ countryId }}</h1>
  </div>
</template>

<script setup lang="ts">
const { countryId } = useRoute().params;
</script>
