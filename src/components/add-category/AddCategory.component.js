import React, {useState} from 'react'
import './AddCategory.component.css'
import PropTypes from "prop-types";

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    const handlerChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2) {
            setCategories((category) => [inputValue, ...category]);
            setInputValue('');
        }else{
            console.log('vacio');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={inputValue}
            onChange={handlerChange}
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}