import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', {
  state: () => ({
    isOpenModal: false
  }),

  actions: {
    openModal() {
      this.isOpenModal = true
    },
    closeModal() {
      this.isOpenModal = false
    }
  }
})
