<template>
  <div class="contacts">
    <h1 class="text-h1">MY CONTACTS</h1>
    <BaseButton text="Add contact" @click="addContact"/>
    <ContactItem v-for="item in contactStore.contacts" :key="item.id" :contact="item"/>
    <BaseModal v-if="modalStore.isOpenModal"/>
  </div>
</template>

<script setup lang="ts">
import type { IContact } from '~~/types';
import {Categories} from '~~/constants';
import { useContactStore } from '~~/stores/contacts';
import { useModalStore } from '~~/stores/modal';

const contactStore = useContactStore()
const modalStore = useModalStore()

const addContact = () => {
  modalStore.openModal()
}

</script>

<style scoped>

</style>
