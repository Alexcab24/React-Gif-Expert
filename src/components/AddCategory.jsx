import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {


    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) =>{
        // console.log(target.value)
        setInputValue(target.value)
    }


    const onSubmit = (event) =>{
   event.preventDefault();

   if(inputValue.trim().length <=1) return;
  //  console.log(inputValue);
  // setCategories(categories => [inputValue, ...categories ]);
  onNewCategory(inputValue.trim()) ;
  setInputValue('');
    }
  return (

    <center><form onSubmit={(event) =>onSubmit(event)} >
    <input
        type = 'text'
        placeholder = "Buscar"
        value = {inputValue}
        onChange = {(event) => onInputChange(event)}
        />
    
        </form></center>
    
  )
}
