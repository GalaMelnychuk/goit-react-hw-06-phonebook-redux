import { configureStore } from "@reduxjs/toolkit";
import contactsItemsFilteredReducer from "./reducers";

// {
//   contacts: {
//     items: [{}, {}, ],
//     filter: ''
//   }
//   user: {}
// }

const store = configureStore({
  reducer: {
    contacts: contactsItemsFilteredReducer,
  },
});

export default store;
