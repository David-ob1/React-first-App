import { useState } from "react" 
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  const [categories, setCategories ] = useState(['One Punch',"Dragon ball"])

  const onAddCategory = () =>   {

    // setCategories([...categories, "Valorant"])
    // setCategories(cat => [...cat,"Valorant"])


    
    

  }

  console.log(categories)

  return (
   <>
    {/* titulo */}
        <h1>GifExpertApp</h1>
    {/* input */}
    
    <AddCategory />

  {/* List de Gif */}
  <button onClick={onAddCategory }>Agregar</button>

    <ol>
      {categories.map( category =>{
        return <li key={ category }>{ category }</li>


      })}
  

    </ol>

    {/* Git Item */}

   </>
  )
}
