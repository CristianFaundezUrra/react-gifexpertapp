import React, { useState } from 'react'
import ProTypes from 'prop-types';


export const AddCategory = ({setCategories}) => {

//La caja tiene que tener un tipo de estado, para sabe lo que un usuario esta escribiendo
    const [inputValue, setImputValue] = useState('')   

                            // (e) = evento
    const handleInputChange = (e) => {
        setImputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length >2){
            setCategories(cats => [inputValue, ...cats,  ]);
            setImputValue('');
        }
        
    }

    return (
            
        <form onSubmit={handleSubmit}> 
           <input
           type="text"
           value={inputValue}
           onChange={ handleInputChange }
           /> 
        </form>
           
    )
}

AddCategory.protoType = {
    setCategories: ProTypes.func.isRequired
}