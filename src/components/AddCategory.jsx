import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    // Si cambia el input del form actualiza el estado de inputValue con el nuevo valor.
    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        // setCategories( categories => [ inputValue, ...categories ]);
        setInputValue('');
        // Aquí se le pasa el valor de inputValue a la función de flecha que ejecuta onAddCategory.
        onNewCategory( inputValue.trim() );
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
