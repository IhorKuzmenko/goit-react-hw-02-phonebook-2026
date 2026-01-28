import { Component } from 'react';

import css from '../Contacts/Contacts.module.css';

class Contacts extends Component {
  render() {
    const { contacts, filter, onFilterChange, onClick } = this.props;
    return (
      <>
        <div className={css.filterContainer}>
          <label htmlFor="filter">Find contact by name</label>
          <input
            id="filter"
            className={css.filterInput}
            name="filter"
            value={filter}
            onChange={onFilterChange}
          ></input>
        </div>
        <ul>
          {contacts.map(contact => (
            <li className={css.contactList} key={contact.id}>
              <span className={css.contactName}>
                {contact.name}: {contact.number}
              </span>

              <button type="button" onClick={() => onClick(contact.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Contacts;
