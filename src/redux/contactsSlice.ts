import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface ContactsState {
  contacts: Contact[];
  searchQuery: string;
}

const initialState: ContactsState = {
  contacts: [],
  searchQuery: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action: PayloadAction<Omit<Contact, 'id'>>) {
      state.contacts.push({ id: Date.now().toString(), ...action.payload });
    },
    editContact(state, action: PayloadAction<Contact>) {
      const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
    removeContact(state, action: PayloadAction<string>) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
});

export const { addContact, editContact, removeContact, setSearchQuery } = contactsSlice.actions;
export default contactsSlice.reducer;
