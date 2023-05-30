import React from 'react';

export const Phonebook = ({ name, tell, updateInput, addNewContact }) => {
  return (
    <>
      <label>Name
      <input
        id="iput_name"
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={updateInput}
      />
      </label>
      
      <label htmlFor="iput_name">Number
      <input
        type="tel"
        name="number"
        value={tell}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={updateInput}
      /></label>
      
      <button type="button" onClick={addNewContact}>
        Add contact
      </button>
    </>
  );
};
