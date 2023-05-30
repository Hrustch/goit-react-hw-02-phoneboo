import React, { Component } from 'react';
import { Section } from './PhoneBook/Section';
import { Phonebook } from './PhoneBook/PhonebookInput';
import { PhonebookContacts } from './PhoneBook/PhonebookContacts';
import { nanoid } from 'nanoid';
import { PhonebookFilter } from './PhoneBook/PhonebookFilter';

export default class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: '',
  };

  updateInput = event => {
    const {name, value} = event.target
    this.setState({[name]: value});
  };

  addNewContact = () => {
    console.log(this.state);
    const user = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    if (this.state.name !== '') {
      this.setState(prefState => ({
        contacts: [...prefState.contacts, user],
        name: '',
        number: ''
      }));
    }
  };

  onFilterChange = (event) => {
      const {name, value} = event.target
      this.setState({[name]: value});
  }

  getFilteredContacts = () => {
    const {filter, contacts} = this.state;
    return contacts.filter((contact)=>(contact.name.toLowerCase().includes(filter.toLowerCase())));
  }

  deleteContactById = (id) => {
    this.setState((prefState)=>({
      contacts: prefState.contacts.filter((contact)=>(contact.id !== id))
    }))
  }

  render() {
    return (
      <div>
        <Section title="Phonebook">
          <Phonebook
            name={this.state.name}
            tell={this.state.number}
            updateInput={this.updateInput}
            addNewContact={this.addNewContact}
          />
        </Section>        
        <Section title="Contacts">          
          {this.state.contacts.length>0 ? <><PhonebookFilter filter={this.state.filter} onFilterChange={this.onFilterChange}/><PhonebookContacts contactsArr={this.getFilteredContacts()} deleteContactById={this.deleteContactById}/></> : <p>No contacts found yet. Please add new contact!</p>}
        </Section>
      </div>
    );
  }
}