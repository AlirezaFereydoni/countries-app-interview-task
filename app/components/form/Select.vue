<template>
  <div class="relative select-wrapper w-full">
    <button
      @click="toggleDropdown"
      class="flex items-center justify-between w-full pl-4 py-4 rounded-md shadow select-button"
      :class="className"
    >
      <span class="text-left select-text" :class="{ 'is-placeholder': isPlaceholder }">
        {{ displayValue }}
      </span>
      <div class="flex items-center gap-2 mr-4">
        <button
          v-if="!isPlaceholder"
          @click.stop="resetValue"
          class="flex items-center justify-center w-5 h-5 rounded-full transition-colors duration-200 reset-button"
          title="Clear selection"
        >
          <Icon name="heroicons:x-mark" class="w-4 h-4" />
        </button>
        <Icon
          name="heroicons:chevron-down"
          class="w-5 h-5 transition-transform duration-200"
          :class="{ 'rotate-180': isOpen }"
        />
      </div>
    </button>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isOpen"
        class="absolute top-full left-0 right-0 mt-1 rounded-md shadow-lg z-50 select-dropdown"
      >
        <ul class="py-2">
          <li
            v-for="option in options"
            :key="option.value"
            @click="selectOption(option)"
            class="px-4 py-3 cursor-pointer transition-colors duration-150 select-option"
            :class="{ 'selected-option': selectedValue === option.value }"
          >
            {{ option.label }}
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
interface SelectOption {
  value: string;
  label: string;
}

const props = defineProps<{
  value: string;
  options: SelectOption[];
  placeholder?: string;
  className?: string;
  onChange: (value: string) => void;
}>();

const isOpen = ref(false);
const selectedValue = ref(props.value);

const displayValue = computed(() => {
  const selectedOption = props.options.find(option => option.value === selectedValue.value);
  return selectedOption?.label || props.placeholder || 'Select an option';
});

const isPlaceholder = computed(() => {
  const selectedOption = props.options.find(option => option.value === selectedValue.value);
  return !selectedOption;
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option: SelectOption) => {
  selectedValue.value = option.value;
  props.onChange(option.value);
  isOpen.value = false;
};

const resetValue = () => {
  selectedValue.value = '';
  props.onChange('');
  isOpen.value = false;
};

const closeDropdown = (event: Event) => {
  const target = event.target as HTMLElement;
  if (!target.closest('.select-wrapper')) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', closeDropdown);
});

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown);
});

watch(
  () => props.value,
  newValue => {
    selectedValue.value = newValue;
  }
);
</script>

<style scoped>
.select-button {
  background-color: var(--bg-secondary);
}

.select-text {
  color: var(--text-primary);
}

.select-text.is-placeholder {
  color: var(--text-secondary);
  opacity: 0.7;
}

.select-dropdown {
  background-color: var(--bg-secondary);
}

.select-option {
  color: var(--text-primary);
}

.select-option:hover {
  background-color: var(--bg-primary);
}

.selected-option {
  background-color: var(--bg-primary);
}

.reset-button {
  color: var(--text-secondary);
}

.reset-button:hover {
  color: var(--text-primary);
  background-color: var(--bg-primary);
}
</style>
