import { useState } from 'react';

export const useForm = ( initialValue = {} ) => {
    
    const [formState, setFormState] = useState( initialValue );

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
    }

    const handleSumit = (e) => {
        e.preventDefault();
        console.log(formState);
    }

    const reset = () => {
        setFormState(initialValue);
    }

    return [ formState, handleInputChange, handleSumit, reset ];
}
