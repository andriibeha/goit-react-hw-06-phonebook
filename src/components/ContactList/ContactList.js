import ContactItem from "components/ContactItem/ContactItem";
import { useSelector, useDispatch } from 'react-redux';
import s from "./ContactList.module.css";

const ContactList = () => {
    const contacts = useSelector((state) => state.contactsSlice.contacts.items);
          
    return (
        <ul className={s.list}>
            {contacts.map((item) => (
                <ContactItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

export default ContactList;