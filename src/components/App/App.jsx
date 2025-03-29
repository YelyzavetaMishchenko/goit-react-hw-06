import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <div className={styles.form}>
        <ContactForm />
      </div>
      <SearchBox />
      <div className={styles.contactsContainer}>
        <ContactList />
      </div>
    </div>
  );
}
