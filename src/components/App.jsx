import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/selectors';
import { Blocks } from 'react-loader-spinner';

const App = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <Blocks />}
      <ContactList />
    </div>
  );
}

export default App;