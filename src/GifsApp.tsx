import { useState } from "react"
import { GifAdd } from "./components/GifAdd";
import { GifGrid } from "./components/GifGrid";


export const GifsApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory :string)=>{
        if(categories.includes(newCategory)) return;


        setCategories( cats => [newCategory, ...cats]);
    }
  return (
    <>
        <h2>GifsApp</h2>
        <hr />
        <GifAdd onNewCategory = { onAddCategory }/>

        {
            categories.map( category => (
                <GifGrid 
                    key={category} 
                    category = { category }
                     />
            ))  
        }
    </>
  )
}
