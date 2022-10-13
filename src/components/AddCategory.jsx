import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target:{ value } }) => {
        setInputValue(value);
    }
    const onSubmit = e => {
        e.preventDefault();
        
        const cleanInputValue = inputValue.trim();
        if(cleanInputValue.length <= 1) return;
        
        onNewCategory(cleanInputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
                autoFocus
            />
        </form>
    )
}
