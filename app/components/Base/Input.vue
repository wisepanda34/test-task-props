<template>
  <div>
    <label for="id">{{ label }}</label>
    <input id="id" type="text" v-model="text">
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: number,
  text: string,
  type: string,
  label: string
}>()
</script>

<style lang="scss" scoped>

</style>
