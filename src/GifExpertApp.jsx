// Para usar el snippet de react, escribir rafcp y presionar tab.

import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState([ 'One Punch' ]);
    
    // Agrega la nueva categoria si es que no existe.
    // En vez de pasar la función directamente en la linea 23, se pasa como flecha, entonces al llamar a onNewCategory, se le pasa el valor solamente.
    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
    }
    
    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory = {(value) => onAddCategory(value)}
            />

            { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                ))
            }
        </>
    )
}

