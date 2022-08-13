import From from "../Form/Form";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import { useSelector, useDispatch } from 'react-redux';
import { setContact } from "../../store/reducer";
import s from './App.module.css';


function App() {
    const contacts = useSelector((state) => state.contactsSlice.contacts.items);
    const dispatch = useDispatch();
    
    const handleSubmit = data => {
        let findName = contacts.find(item => item.name === data.name); 

        if (findName) { 
            return alert(`${data.name} is already in contact`)
        } else { 
            dispatch(setContact(data))
        };
    };

    return (
        <div className={s.container}>
            <h1>Phonebook</h1>
            <From
                onSubmit={handleSubmit}
            />
            <h2>Contacts</h2>
            <Filter/>
            <ContactList/>
        </div>
    );
};

export default App;


