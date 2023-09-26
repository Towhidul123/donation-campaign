import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className=" flex justify-between py-14 px-5 md:px-[100px] lg:px-[150px] bg-transparent  ">

            <div>
                <img src="../../../donation-campaign-main/Resources/Logo.png" alt="" />
            </div>


            <div className="">
                <nav>
                    <ul>
                        <li className="flex justify-between gap-2">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                                }
                            >
                                Home
                            </NavLink>
                            <li>

                            </li>
                            <NavLink
                                to="/donation"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                                }
                            >
                                Donation
                            </NavLink>

                            <li>
                                <NavLink
                                    to="/statistics"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                                    }
                                >
                                    Statistics
                                </NavLink>
                            </li>
                                    

                        </li>
                    </ul>
                </nav>



            </div>


        </div>
    );
};

export default Header;