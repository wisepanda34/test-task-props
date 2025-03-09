<template>
  <div class="select">
    <div class="select-header" @click="toggleDropdown">
      {{ selectedCategory ? selectedCategory : props.placeholder }}
    </div>
    <ul v-if="isOpen" class="select-dropdown">
      <li v-for="(category, key) in Categories" :key="key" @click="selectCategory(category)">{{ category }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Categories } from '~~/constants';

const props = defineProps({
  modelValue:{
    type: String as () => Categories | null,
    default: null,
  },
  placeholder: {
    type: String,
    default: "Select category",
  }
})

const emit = defineEmits(['update:modelValue'])

const selectedCategory = ref<Categories | null>(props.modelValue)
const isOpen = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectCategory = (category: Categories) => {
  selectedCategory.value = category
  emit('update:modelValue', 'category')
  isOpen.value = false
}

watch(() => props.modelValue, (newVal) => {selectedCategory.value = newVal})

</script>

<style lang="scss" scoped>
.select {
  position: relative;
  width: 200px;
  font-family: sans-serif;

  .select-header {
    border: 1px solid #ccc;
    padding: 8px;
    cursor: pointer;
    border-radius: 4px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .select-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    border: 1px solid #ccc;
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 10;

    li {
      padding: 8px;
      cursor: pointer;

      &:hover {
        background-color: #f0f0f0;
      }
    }
  }
}
</style>
