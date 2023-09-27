import { useEffect, useState } from "react";
import DetailsCard from "../DetailsCard/DetailsCard";

const Donation = () => {

    const [donation,setDonation] = useState([])

    const [noFound,setNoFound] = useState (false)

    const [showButton, setShowButton] = useState(true);

    useEffect (() =>{
        const items = JSON.parse(localStorage.getItem('test'));
        
        if(items){
            setDonation(items)
        }
        else{
            setNoFound("No Data Found")
        }
    },[])

    return  (
        <div>
            {
                noFound ? (
                    <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
                ) : (
                    <div>
                        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                            {showButton ? donation.slice(0, 4).map(category => (
                                <DetailsCard key={category.id} category={category}></DetailsCard>
                            )) : donation.map(category => (
                                <DetailsCard key={category.id} category={category}></DetailsCard>
                            ))}
                        </div>
                        {donation.length > 4 && showButton && (
                            <button
                                onClick={() => setShowButton(false)}
                                className="px-5 bg-green-200 block mx-auto"
                            >
                                See more
                            </button>
                        )}
                    </div>
                )
            }
        </div>
    );
};

export default Donation;
