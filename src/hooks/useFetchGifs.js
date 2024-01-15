import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
 
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }
    
    // Esto se ejecuta después de que el componente se monta y después de cada actualización del mismo.

    // En este caso se llama a getImages una vez el componente se monta por primera vez.

    // Es el lugar ideal para realizar operaciones asíncronas como peticiones HTTP, Apis, etc.
    useEffect( () => {
        getImages();
    }, []);



    return {
        images,
        isLoading
    }

}
