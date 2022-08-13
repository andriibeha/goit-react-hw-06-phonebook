import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setFilter, filterContactList } from "../../store/reducer";

const Filter = () => {
    const value = useSelector((state) => state.contactsSlice.filter);
    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch(setFilter(e.target.value));
        if (e.target.value.trim() === "") {
                return 
            };
        dispatch(filterContactList(e.target.value))
    };

    
    
    return (
        <label>
            Find contacts by name
            <input type="text"
                value={value}
                onChange={onChange} />
        </label>
    );
};

export default Filter;