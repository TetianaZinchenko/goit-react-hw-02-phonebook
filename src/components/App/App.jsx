import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactsTitle, Container, FilterTitle, Title } from './App.styled';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = data => {
    const equalName = this.state.contacts.find(
      el => el.name.toLowerCase() === data.name.toLowerCase()
    );
    if (equalName) return alert(equalName.name + ' is already in contacts.');

    data.id = nanoid();
    this.setState(prev => ({ contacts: [data, ...prev.contacts] }));
  };

  changeFilter = e => {
    // e.preventDefault();
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter, contacts } = this.state;

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.handleSubmit} />
        <ContactsTitle>Contacts</ContactsTitle>
        <FilterTitle>Find contacts by name</FilterTitle>
        <Filter value={filter} onChange={this.changeFilter} />
        {contacts.length ? (
          <ContactList
            contacts={this.getVisibleContacts()}
            onDelete={this.deleteContacts}
          />
        ) : (
          <p>No any contacts</p>
        )}
      </Container>
    );
  }
}

export default App;
