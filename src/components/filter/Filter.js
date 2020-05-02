import React from "react";
import styles from "./Filter.module.css";
import { connect } from 'react-redux';
import {changeFilter} from '../redux/contactsActionsTypes';
import PropTypes from 'prop-types';


const Filter = ({value, onChangeFilterContact}) => {
  return (
    <label className={styles.filter}>
      Find contact by name
      <input className={styles.inputFilter} value={value} onChange={(e) => onChangeFilterContact(e.target.value)}></input>
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilterContact: PropTypes.func
};

const mapStateToProps = state => ({
  value: state.contacts.filter
})

const mapDispatchToProps = {
  onChangeFilterContact: changeFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);