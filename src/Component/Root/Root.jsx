import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Root = () => {
    return (
        <div className="container mx-auto m-0 p-0">
            <Header></Header>
            <div className="py-10">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;