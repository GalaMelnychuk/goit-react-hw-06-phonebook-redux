import React from "react";
import styles from "./ContactListItem.module.css";
import PropTypes from "prop-types";

const ContactListItem = ({id, number, name, onDeleteContact}) => {
  return (
    <li className={styles.item}>
      <p className={styles.name}>{name}{id}</p>
      <p className={styles.number}>{number}</p>
      <button className={styles.buttonForm} onClick={() => onDeleteContact(id)}>
        x
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.object,
  onDeleted: PropTypes.func
};


export default ContactListItem;

