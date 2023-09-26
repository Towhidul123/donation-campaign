import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";


const Donation = () => {

    const [donation,setDonation] = useState([])

    const [noFound,setNoFound] = useState (false)

    const [isShow,setIsShow] = useState(false)


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
                        {
                            isShow ? donation.map(category=><CategoryCard key={category.id} category={category}></CategoryCard>) 
                            : donation.slice(0,4).map(category=><CategoryCard key={category.id} category={category}></CategoryCard>)

                        }
                    </div>


                   {donation.length > 4 &&  <button onClick={() => setIsShow(!isShow)}  className="px-5 bg-green-200 block mx-auto">{isShow ? 'See less': "See more"}</button>
                        }


                    </div>
                    
                }
            </div>
        );
};

export default Donation;