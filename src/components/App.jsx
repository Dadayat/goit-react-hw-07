import { ContactForm } from "./ContactForm/ContactForm";
import { SearchBox } from "./SearchBox/SearchBox.jsx";
import { ContactList } from "./ContactList/ContactList";
import css from "./App.module.css";

export const App = () => {
  return (
    <div className={css.font}>
      <div className={css.container}>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <SearchBox />
        <ContactList />
      </div>
    </div>
  );
};
