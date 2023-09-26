import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DisplayCard from "../DisplayCard/DisplayCard";



const Categories = () => {

    

    const [category,setCategory] = useState();

  const categories = useLoaderData();
  const {id} = useParams();
  
  useEffect(()=>{
    const findCategory = categories?.find(category => category.id == id)

  

    setCategory(findCategory);

  },[id,categories])

  console.log(category)
  



    return (
        <div>
            <DisplayCard category={category} ></DisplayCard>
        </div>
    );
};

export default Categories;