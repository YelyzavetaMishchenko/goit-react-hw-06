import { useState, useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import styles from "./App.module.css";

const STORAGE_KEY = "contacts";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(STORAGE_KEY);
    return savedContacts ? JSON.parse(savedContacts) : [];
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleDeleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value.toLowerCase().trim());
  };

  const filteredContacts = filter
    ? contacts.filter((contact) => contact.name.toLowerCase().includes(filter))
    : contacts;

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <div className={styles.form}>
        <ContactForm onAddContact={handleAddContact} />
      </div>
      <SearchBox filter={filter} onFilterChange={handleFilterChange} />
      <div className={styles.contactsContainer}>
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={handleDeleteContact}
        />
      </div>
    </div>
  );
}
