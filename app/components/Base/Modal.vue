<template>
  <div class="modal">
    <div class="modal__white">
      <Form/>
       <!-- Modal -->
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.modal{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  &__white {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
  }
}
</style>
