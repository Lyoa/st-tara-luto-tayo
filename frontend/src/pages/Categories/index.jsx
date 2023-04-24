import { useEffect, useState } from "react";
import { listCategories } from "../../services/CategoriesService";

function Categories() {
    const [categories, setCategories] = useState([])
    console.log(categories)
    useEffect(() => {
        listCategories().then((user) => {
            setCategories(user)
        })
    }, [])    
    return <><ul>
        {categories.map(category => (<li>{category.title}</li>))}
        </ul></>
} 
  export default Categories;