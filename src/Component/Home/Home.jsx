import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import { useState } from "react";


const Home = () => {

    const [searchInput, setSearchInput] = useState('');
    const category = useLoaderData()
    


    return (
        <div>
        <Banner setSearchInput={setSearchInput} />
        <Category category={category} searchInput={searchInput} /> 
    </div>
    );
};

export default Home;