import css from './ContactList.module.css';
import {getContacts, getFilter} from "redux/selectors";
import { deleteContact } from 'redux/operations';
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from 'redux/operations';

import { useEffect } from 'react';



const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(
    contact => contact.name.toLowerCase().includes(filter.toLowerCase())
  );

    return (
      <ul className={css.contactList}>
        {filteredContacts.map(contact => {
          let markup = (
            <li key={contact.id} className={css.contactItem}>
              <span>
                {contact.name}: {contact.number}
              </span>
              <button
                type="button"
                onClick={() => dispatch(deleteContact(contact.id))}
                className={css.contactButton}
              >
                Delete
              </button>
            </li>
          );
          return markup;
        })}
      </ul>
    );
}

export default ContactList;
