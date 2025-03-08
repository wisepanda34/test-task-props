import { defineStore } from 'pinia';
import type { IContact } from '~~/types';
import { Categories } from '~~/constants';

const initialContacts: IContact[] = [
  {
    id: 1,
    name: 'Ricki',
    surname: 'Martin',
    email: 'Ricki@mail.com',
    tel: '0673332211',
    category: Categories.Work,
  },
  {
    id: 2,
    name: 'Pol',
    surname: 'Pogba',
    email: 'Pogba@mail.com',
    tel: '0677778899',
    category: Categories.Friend,
  },
  {
    id: 3,
    name: 'John',
    surname: 'Seena',
    email: 'Seena@mail.com',
    tel: '0679996633',
    category: Categories.Family,
  },
];

export const useContactStore = defineStore('contact', {
  state: () => ({
    contacts: initialContacts as IContact[],
  }),
  getters: {
    getContactById: (state) => (id: number) => {
      return state.contacts.find((contact) => contact.id === id);
    },
    getContactsByCategory: (state) => (category: Categories) => {
      return state.contacts.filter((contact) => contact.category === category);
    },
  },

  actions: {
    addContact(contact: IContact) {
      this.contacts.push(contact);
    },

    removeContact(id: number) {
      this.contacts = this.contacts.filter((contact) => contact.id !== id);
    },

    updateContact(updatedContact: IContact) {
      const index = this.contacts.findIndex((contact) => contact.id === updatedContact.id);
      if (index !== -1) {
        this.contacts[index] = updatedContact;
      }
    },
  },
});
