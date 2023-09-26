import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";


const Donation = () => {

    const [donation,setDonation] = useState([])

    const [noFound,setNoFound] = useState (false)

    useEffect (() =>{
        const items = JSON.parse(localStorage.getItem('test'));
        
        if(items){
            setDonation(items)

        }

        else{
            
            setNoFound("No Data Found")
        }
        


    },[])

    console.log(donation)

    return  (
            <div>
                {
                    noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p> : <div>

                    <div className="grid grid-cols-2 gap-5">
                        {donation.map(category=><CategoryCard key={category.id} category={category}></CategoryCard>)}
                    </div>


                    <button  className="px-5 bg-green-200 block mx-auto">See More</button>



                    </div>
                }
            </div>
        );
};

export default Donation;