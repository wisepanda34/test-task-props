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
const initialLastId: number = 3

export const useContactStore = defineStore('contact', {
  state: () => ({
    contacts: initialContacts as IContact[],
    lastId: initialLastId as number,
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
      const newId = this.lastId + 1;
      contact.id = newId;
      this.contacts.push(contact);
      this.lastId = newId;
    },

    removeContact(id: number) {
      this.contacts = this.contacts.filter((contact) => contact.id !== id);
    },

    updateContact(updatedContact: IContact) {
      console.log(updatedContact);

      const index = this.contacts.findIndex((contact) => contact.id === updatedContact.id);
      if (index !== -1) {
        this.contacts[index] = updatedContact;
      }
    },
  },
});
