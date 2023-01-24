import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import css from './ContactForm.module.css';

const ContactForm =  () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const require = contacts.filter(contact => contact.name.toLowerCase() === form.elements.name.value);

        if (require.length === 0) {
            console.log(form.elements.number.value)
            dispatch(
              addContact({
                name: form.elements.name.value,
                number: form.elements.number.value,
              })
            );
                } else {
                    alert(`${form.elements.name.value} already is on contacts.`);
                }
                form.reset();
            }
            return (
      <div>
        <form
          action=""
          onSubmit={handleSubmit}
          className={css.contactForm}
          id="myform"
        >
          <label className={css.contactLabel}>
            Name
            <input
              className={css.contactInput}
              type="text"
              name="name"
              placeholder='Clarck Kent'
              pattern="^[a-zA-Z]+\s[a-zA-Z]+$"
              required
            />
          </label>
          <div className={css.errorMessage}></div>
          <label className={css.contactLabel}>
            Number
            <input
              className={css.contactInput}
              type="text"
              name="number"
              placeholder='+380111111111'
              pattern="^(?:\+38)?(0\d{9})$"
              required
            />
          </label>
          <div className={css.errorMessage}></div>
          <button type="submit" className={css.contactButton}>
            Add contact
          </button>
        </form>
      </div>
    );  
}

export default ContactForm;
