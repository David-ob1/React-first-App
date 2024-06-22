import { useState } from "react" 
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  const [categories, setCategories ] = useState(['One Punch',"Dragon ball"])

  const onAddCategory = (newCategory) =>   {

    if(categories.includes(newCategory)) return
  
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

    onNewCategory={ value => onAddCategory(value)}
 
    />




  
      {categories.map( category => (
          
          <GifGrid key= {category} category={category} />
        )

      )}
  

    

    {/* Git Item */}

   </>
  )
}
