import { Component } from 'react';
import css from '../FormName/FormName.module.css';

class FormName extends Component {
  render() {
    const { name, number, onChange, onSubmit } = this.props;

    return (
      <form className={css.form} onSubmit={onSubmit}>
        <label htmlFor="nameId" className={css.label}>
          Name
        </label>
        <input
          className={css.input}
          onChange={onChange}
          value={name}
          id="nameId"
          type="text"
          name="name"
          pattern="^[A-Za-zА-Яа-яЁё][A-Za-zА-Яа-яЁё ,.'-]*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="numberId">Number</label>
        <input
          className={css.input}
          onChange={onChange}
          value={number}
          id="numberId"
          type="tel"
          name="number"
          pattern="^\+?[\d\s\-.()]{6,20}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default FormName;
