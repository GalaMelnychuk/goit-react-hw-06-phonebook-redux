import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./ContactList.module.css";
import { connect } from "react-redux";
import { deleteContact } from "../redux/contactsActionsTypes";
import ContactListItem from "../contactListItem/ContactListItem";
import slideTransition from "../../transitions/slide.module.css";
import PropTypes from "prop-types";

const ContactList = ({ contacts, deleteChosenContact }) => (
  <TransitionGroup component="ul" className={styles.contactList}>
    {contacts.map(({ contactId, number, name }) => (
      <CSSTransition timeout={250} classNames={slideTransition} unmountOnExit>
        <ContactListItem
          key={contactId}
          name={name}
          id={contactId}
          number={number}
          onDeleteContact={deleteChosenContact}
        />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

ContactList.propTypes = {
  contacts: PropTypes.array,
  onItemDeleted: PropTypes.func,
};

const mapStateToProps = (state) => {
  const {items, filter} = state.contacts;
  const normalizedContacts = filter.toLowerCase();
  const visibleContacts = items.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedContacts)
  );
  return {
    contacts: visibleContacts,
  };
};

const mapDispatchToProps = {
  deleteChosenContact: deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
