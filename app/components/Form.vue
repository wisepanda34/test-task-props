<template>
  <div class="form">
    id: {{ id }}
    <BaseInput v-model="contact.name" placeholder="Name" />
    <BaseInput v-model="contact.surname" placeholder="Surname" />
    <BaseInput v-model="contact.email" placeholder="Email" />
    <BaseInput v-model="contact.tel" placeholder="Tel" />

    <BaseSelect v-model="contact.category" placeholder="Choose category"/>

    <div class="form-buttons">
      <BaseButton text="Cancel" @click="closeModal"/>
      <BaseButton text="Save" @click="onSave"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import type { IContact } from '~~/types';
import { Categories } from '~~/constants'
import { useContactStore } from '~~/stores/contacts'
import { useModalStore } from '~~/stores/modal';


const route = useRoute();
const router = useRouter()
const id = computed(() => {
  const rawId = route.params.id
  return Array.isArray(rawId) ? Number(rawId[0]) : Number(rawId)
})

const modalStore = useModalStore()
const contactStore = useContactStore()
const existingContact = computed(() => contactStore.getContactById(id.value))

const contact = reactive<IContact>(existingContact.value ?? {
  id: id.value,
  name: '',
  surname: '',
  email: '',
  tel: '',
  category: null
})

const closeModal = () => {
  modalStore.closeModal()
  router.push('/')
}

const onSave = () => {

  if(!contact.name || !contact.surname || !contact.email || !contact.tel || !contact.category){
    console.log('не все поля заполнены');
    return
  }

  //если редактировать
  if(contact.id) {
    contactStore.updateContact(contact)
    //если новый контакт создаем новый id
  } else {
    contactStore.addContact(contact);
  }
  closeModal()
  router.push('/')
}

</script>

<style lang="scss" scoped>
.form{

  .form-buttons{
    display: flex;
    gap: 10px;
    margin-top: 15px;
  }
}
</style>
