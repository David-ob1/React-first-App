import { useState } from "react" 
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  const [categories, setCategories ] = useState(['One Punch',"Dragon ball"])

  const onAddCategory = (newCategory) =>   {

  
    // console.log(newCategory)
    // categories.push(newCategory)
    setCategories([newCategory,...categories])

    // setCategories([...categories, "Valorant"])
    // setCategories(cat => [...cat,"Valorant"])


    
    

  }

  // console.log(categories)

  return (
   <>
    {/* titulo */}
        <h1>GifExpertApp</h1>
    {/* input */}
    
    <AddCategory
    // setCategories ={setCategories} 
    onNewCategory={ value => onAddCategory(value)}
    />

  {/* List de Gif */}


    <ol>
      {categories.map( category =>{
        return <li key={ category }>{ category }</li>


      })}
  

    </ol>

    {/* Git Item */}

   </>
  )
}
