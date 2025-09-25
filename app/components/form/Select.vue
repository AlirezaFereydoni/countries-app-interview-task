<template>
  <div class="relative select-wrapper w-full">
    <button
      @click="toggleDropdown"
      class="flex items-center justify-between w-full pl-4 py-4 rounded-md shadow select-button"
      :class="className"
    >
      <span class="text-left">{{ displayValue }}</span>
      <Icon
        name="heroicons:chevron-down"
        class="w-5 h-5 mr-4 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>

    <Transition name="dropdown">
      <div
        v-if="isOpen"
        class="absolute top-full left-0 right-0 mt-1 rounded-md shadow-lg border z-50 select-dropdown"
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

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option: SelectOption) => {
  selectedValue.value = option.value;
  props.onChange(option.value);
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

.select-dropdown {
  background-color: var(--bg-secondary);
  border-color: var(--text-secondary);
  opacity: 1;
}

.select-option {
  color: var(--text-primary);
}

.select-option:hover {
  background-color: var(--bg-primary);
}

.selected-option {
  background-color: var(--bg-primary);
  font-weight: 600;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
