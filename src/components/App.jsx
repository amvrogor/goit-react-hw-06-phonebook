import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
    const parsedContacts = JSON.parse(savedContacts);
    return parsedContacts;
  }
  return [];
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already in contacts`)
      : setContacts(prevState => [...prevState, newContact]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const FilteredContacts = getFilteredContacts();
  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <Layout title="Phonebook">
      <ContactForm onSave={addContact} />
      <Filter value={filter} onChange={changeFilter} />
      <ContactsList contacts={FilteredContacts} onDelete={deleteContact} />
      <GlobalStyle />
    </Layout>
  );
};
