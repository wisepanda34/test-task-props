<template>
  <div class="input">
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="input__field" />
  </div>
</template>

<script setup lang="ts">

withDefaults(defineProps<{
  modelValue: string
  type?: string
  placeholder?: string
}>(),
{
  type: 'text',
  placeholder: ''
})

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<style lang="scss" scoped>
.input {
  margin-bottom: 15px;

  &__label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
  }

  &__field {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
}
</style>
