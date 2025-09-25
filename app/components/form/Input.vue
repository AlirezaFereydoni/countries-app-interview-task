<template>
  <div
    class="flex items-center gap-3 pl-6 pr-4 py-4 rounded-md shadow-sm input w-full"
    :class="className"
  >
    <Icon name="heroicons:magnifying-glass" class="w-5 h-5 flex-shrink-0 search-icon" />
    <input
      type="text"
      :value="value"
      @input="(e:Event) => updateValue((e.target as HTMLInputElement).value)"
      :placeholder="placeholder"
      class="w-full bg-transparent border-none outline-none text-input"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  value: string;
  placeholder: string;
  updateValue: (value: string) => void;
  className?: string;
}>();
</script>

<style scoped>
.input {
  background-color: var(--bg-secondary);
  border: none;
}

.search-icon {
  color: var(--text-secondary);
  opacity: 0.7;
}

.text-input {
  color: var(--text-primary);
}

.text-input::placeholder {
  color: var(--text-secondary);
  opacity: 0.7;
}
</style>
