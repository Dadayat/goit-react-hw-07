import { createSlice } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [
      { id: "id-1", name: "Harry Potter", number: "459-12-56" },
      { id: "id-2", name: "Hermione Granger", number: "443-89-12" },
      { id: "id-3", name: "Ronald Weasley", number: "645-17-79" },
      { id: "id-4", name: "Draco Malfoy", number: "227-91-26" },
    ],
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
