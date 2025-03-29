import styles from "./Contact.module.css";

export default function Contact({ contact, onDeleteContact }) {
  return (
    <li className={styles.contactCard}>
      <div className={styles.contactDetails}>
        <div className={styles.nameBlock}>
          <svg
            className={styles.icon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C13.66 2 15 3.34 15 5C15 6.66 13.66 8 12 8C10.34 8 9 6.66 9 5C9 3.34 10.34 2 12 2M12 10C15.87 10 19 11.79 19 14V20H5V14C5 11.79 8.13 10 12 10Z" />
          </svg>
          <span>{contact.name}</span>
        </div>
        <div className={styles.phoneBlock}>
          <svg
            className={styles.icon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M6.62 10.79C7.06 12.27 7.92 13.59 9.17 14.84C10.41 16.08 11.73 16.94 13.21 17.38L15 15.6C15.18 15.42 15.42 15.34 15.67 15.36C16.91 15.46 18.14 15.23 19.25 14.67C19.45 14.58 19.69 14.64 19.84 14.79L22.54 17.49C22.69 17.64 22.73 17.88 22.65 18.08C21.24 21.61 17.53 23.38 13.18 22.07C11.24 21.48 9.45 20.53 7.83 19.21C6.21 17.89 4.86 16.35 3.8 14.61C2.72 12.86 2.07 11.03 1.82 9.13C1.51 6.76 2.3 4.7 4.19 3.9C4.41 3.81 4.65 3.85 4.8 4L7.5 6.7C7.64 6.85 7.71 7.07 7.62 7.27C7.08 8.38 6.85 9.61 6.95 10.85C6.97 11.1 6.89 11.34 6.71 11.52L6.62 10.79Z" />
          </svg>
          <span>{contact.number}</span>
        </div>
      </div>
      <button
        className={styles.deleteButton}
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
}
