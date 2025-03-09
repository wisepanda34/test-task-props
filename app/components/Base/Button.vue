<template>
  <div class="btn">
    <button>{{ text }}</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{text: string}>()
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;

  button {
    background-color: #007bff;
    color: white;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.1s ease;

    &:hover {
      background-color: #0a6fda;
    }

  }
}
.btn_danger{
  button{
    background: red;
    color: black;

    &:hover {
      background-color: rgb(219, 3, 3);
    }
  }
}
</style>
