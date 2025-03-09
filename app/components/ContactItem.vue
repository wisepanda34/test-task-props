<template>
  <div class="contact-item">
    <p>Name: {{ contact.id }}</p>
    <p>Name: {{ contact.name }}</p>
    <p>Surame: {{ contact.surname }}</p>
    <p>Email: {{ contact.email }}</p>
    <p>Tel: {{ contact.tel }}</p>
    <p>Category: {{ contact.category }}</p>
    <div class="contact-item__buttons">
      <NuxtLink :to="`/edit-contact/${contact.id}`" class="contact-item__edit">Edit</NuxtLink>
      <BaseButton class="btn_danger" text="Delete" @click="onDelete"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IContact } from '~~/types';

const props = defineProps<{
  contact: IContact
}>()

const emit = defineEmits<{
  (e: 'delete-contact', id: number): void
}>()

const onDelete = () => {
  emit('delete-contact', props.contact.id)
}

</script>

<style lang="scss" scoped>
.contact-item{
  padding: 30px 0;

  &__buttons{
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }

  &__edit{
    height: 28px;
  color: #000;
  padding: 5px 10px;
  border: 1px solid #100f0f;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.3s ease, transform 0.1s ease, border-color 0.3s ease;

    &:hover {
      background-color: #e9e3e3;
      border-color: #100f0f;
    }
  }

}
</style>
