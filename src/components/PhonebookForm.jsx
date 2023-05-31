import React from 'react';
let contact = {
  name: '',
  number: '',
};

function updateProps(event) {
  console.log(event.target.value);
  const { name, value } = event.target;
  contact[name] = value;
  console.log(contact);
}

function onSubmit(event) {
  event.preventDefault();  
  document.getElementById('input_name').value = '';
  document.getElementById('input_tell').value = '';
}

export const PhonebookForm = ({ addNewContact }) => {
  return (
    <>
      <form onSubmit={()=>(onSubmit, addNewContact(contact))}>
        <label>
          Name
          <input
            id="input_name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={updateProps}
          />
        </label>

        <label htmlFor="iput_name">
          Number
          <input
            id="input_tell"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={updateProps}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    </>
  );
};
