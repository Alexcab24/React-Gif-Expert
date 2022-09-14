import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"
export const GifExpertApp = () => {

    const [categories, setCategories] = useState([''])
   

   const onAddCategory = (onNewCategory) =>{

console.log(onNewCategory)
if(categories.includes(onNewCategory)) return;
    setCategories([onNewCategory, ...categories])
    }
  return (
   
   <>
  
<center><h1>Vainita GIF</h1></center>

<AddCategory 
onNewCategory={(event) => onAddCategory( event)}
/>


{categories.map(category =>{
    return (
    <GifGrid 
    key={category}
    category={category}
    />
    )
  
})}

    </>
  )
}
