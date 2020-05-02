import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import { Type } from "./contactsActionsTypes";

// {
//   contacts: {
//     items: [{}, {}, ],
//     filter: ''
//   }
//   user: {}
// }

const contacsReducer = (state = [], {type, payload}) => {
  switch (type) {
    case Type.ADD_CONTACT:
          return [
          ...state, payload.contact
        ]
  
    case Type.DELETE_CONTACT:
      return state.filter((contact) => contact.contactId !== payload)
     
    default:
      return state;
  }
};

const filterReducer = (state = "", {type, payload}) => 

{
    switch (type) {
        case Type.CONTACTS_FILTER:
          return payload;
        default:
          return state
      }
};

 const contactsItemsFilteredReducer = combineReducers({
  items: contacsReducer,
  filter: filterReducer,
});

export default contactsItemsFilteredReducer;