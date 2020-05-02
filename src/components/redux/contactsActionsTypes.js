import {createAction} from "@reduxjs/toolkit"

export const Type = {
  ADD_CONTACT: "ADD_CONTACT",
  DELETE_CONTACT: "DELETE_CONTACT",
  CONTACTS_FILTER: "CONTACTS_FILTER",
};
let id = 100;

export const addContact  = createAction("ADD_CONTACT", ({name, number }) => ({
  payload: { 
    contact: { 
      contactId: id++, 
      name, 
      number }
    }
  }));

export const deleteContact = (contactId) => ({
  type: Type.DELETE_CONTACT,
  payload: {contactId}
});

export const contactsFilter = (filter) => ({
  type: Type.CONTACTS_FILTER,
  payload: {filter},
});

export const changeFilter = (filter) => ({
  type: Type.CONTACTS_FILTER,
  payload: {
    filter,
  }
}

)