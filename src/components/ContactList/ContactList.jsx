import Contact from "../Contact/Contact";

export default function ContactList({ contacts, onDeleteContact }) {
  console.log("Полученные контакты в ContactList:", contacts);

  if (!contacts || contacts.length === 0) {
    return <p>No contacts found.</p>;
  }

  return (
    <ul>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
}
