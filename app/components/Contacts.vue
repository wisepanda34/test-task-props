<template>
  <div class="contacts">
    <h1 class="text-h1">MY CONTACTS</h1>
    <ContactItem v-for="item in contactStore.contacts" :key="item.id" :contact="item"/>
  </div>
</template>

<script setup lang="ts">
import type { IContact } from '~~/types';
import {Categories} from '~~/constants';
import { useContactStore } from '~~/stores/contacts';

const contactStore = useContactStore()

</script>

<style scoped>

</style>
