import { useState } from "react"

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState("One Punch")

    const onInputChange = (event)=>{
        console.log(event.target.value)
        setInputValue(event.target.value)
    }

    const onSubmit = (event)=>{
        event.preventDefault()
        console.log(inputValue)

        if(inputValue.trim().length <= 1) return

        setCategories(categories => [inputValue, ...categories])

        setInputValue('');


    }

    return (
        
        <form onSubmit={ onSubmit}>
            <input typer="text"
                placeholder="Buscar gifs" 
                value={ inputValue}
                onChange={ onInputChange }
                
                /> 
        </form>
    )
}