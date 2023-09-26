import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";


const Home = () => {

    const category = useLoaderData()
    


    return (
        <div>
            <Banner></Banner>
            <Category category={category}></Category>
        </div>
    );
};

export default Home;