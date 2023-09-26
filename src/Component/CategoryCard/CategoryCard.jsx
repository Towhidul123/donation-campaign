import { NavLink } from "react-router-dom";


const CategoryCard = ({category}) => {

    const {id, img, title, categories, category_bg, card_bg, text_button_bg, description, price  } = category || {}

    return (
        <div>
            <NavLink to= {`/category/${id}`} className="block">
                <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                        <img src={img} alt="" />
                    </div>
                    <div className="p-6">
                        <div className="mb-2  ">
                           
                            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                              {categories}
                            </p>
                        </div>
                        <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                           {title}
                        </p>
                    </div>

                </div>
            </NavLink>
        </div>
    );
};

export default CategoryCard;