import React from "react";
import PropTypes from 'prop-types';
import {  useDispatch } from 'react-redux';
import {  removeContact } from "../../store/reducer";
import s from "./ContactItem.module.css";

const ContactItem = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <li className={s.item}>
            {item.name} : {item.number}
            <button type="button" className={s.delete}
                onClick={() => dispatch(removeContact(item.id))}>
                Delete
            </button>
        </li>
    );
};

ContactItem.prototype = { 
    item: PropTypes.object,
}

export default ContactItem;