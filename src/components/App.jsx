import React, { Component } from 'react';
import { Section } from './PhoneBook/Section';
import { PhonebookInput } from './PhoneBook/PhonebookInput';
import { PhonebookContacts } from './PhoneBook/PhonebookContacts';
import { nanoid } from 'nanoid';
import { PhonebookFilter } from './PhoneBook/PhonebookFilter';

export default class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  addNewContact = (contact) => {
    const user = {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    };
    if (contact.name !== '') {
      this.setState(prefState => ({
        contacts: [...prefState.contacts, user]
      }));
    }
  };

  onFilterChange = (event) => {
    console.log("Filter changed!")
    this.setState({filter: event.target.value});
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
          <PhonebookInput
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