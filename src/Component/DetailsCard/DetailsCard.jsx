import { NavLink } from "react-router-dom";

const DetailsCard = ({ category }) => {

    const { id, img, title, categories, category_bg, card_bg, text_button_bg, description, price } = category || {}

    const buttonBgStyle = {
        backgroundColor: card_bg,
    };

    const textCol = {
        backgroundColor: category_bg,
        color: text_button_bg,
    }

    const buttonCol = {
        color: text_button_bg,

    }

    const buttonBg = {
        backgroundColor: text_button_bg,
    }


    return (
        <div className="flex items-center justify-center object-center ">
            <div style={buttonBgStyle} className=" flex w-full rounded-xl  ">
                <div className="  h-48 overflow-hidden rounded-xl ">
                    <img className="aspect-square w-full md:w-[200px] object-cover rounded-tr-lg rounded-tl-lg md:rounded-bl-lg md:rounded-tr-none " src={img} alt="" />
                </div>
                <div className="flex flex-col justify-center items-center md:items-start gap-y-1 p-4">

                    <p className="text-sm font-medium py-1">
                        <span style={textCol} className="px-[10px] py-[4px] rounded-sm">
                            {categories}
                        </span>
                    </p>
                    <p className="block text-xl font-semibold">
                        {title}
                    </p>
                    <p style={buttonCol}>
                        ${price}
                    </p>
                    <NavLink to={`/category/${id}`} className="block px-4 py-2 " style={{ ...buttonBg, color: 'white' }}>View Details</NavLink>
                </div>

            </div>

        </div>
    );










};



export default DetailsCard;