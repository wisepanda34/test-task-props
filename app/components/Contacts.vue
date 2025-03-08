<template>
  <div class="contacts">
    <h1 class="text-h1">MY CONTACTS</h1>
    <ContactItem v-for="item in contacts" :key="item.id" :contact="item"/>
  </div>
</template>

<script setup lang="ts">
import type { IContact } from '~~/types';
import {Categories} from '~~/constants';

const contacts: IContact[] = [
  {
    id: 1,
    name: "Ricki",
    surname: "Martin",
    email: "Ricki@mail.com",
    tel: "0673332211",
    category: Categories.Work,
  },
  {
    id: 2,
    name: "Pol",
    surname: "Pogba",
    email: "Pogba@mail.com",
    tel: "0677778899",
    category: Categories.Friend,
  },
  {
    id: 3,
    name: "John",
    surname: "Seena",
    email: "Seena@mail.com",
    tel: "0679996633",
    category: Categories.Family,
  }
]
</script>

<style scoped>

</style>
