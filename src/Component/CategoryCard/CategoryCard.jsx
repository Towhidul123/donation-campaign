import { NavLink } from "react-router-dom";


const CategoryCard = ({category}) => {

    const {id, img, title, categories, category_bg, card_bg, text_button_bg, description, price  } = category || {}

    const buttonBgStyle ={
        backgroundColor: card_bg,
    };

    const textCol ={
        backgroundColor: category_bg,
        color:   text_button_bg,
    }

    const buttonCol ={
        color:   text_button_bg,
        
    }


    return (
        <div className="flex items-center justify-center object-center ">
            <NavLink to= {`/category/${id}`} className="block">
                <div style={buttonBgStyle} className="relative flex w-[312px] flex-col rounded-xl  ">
                    <div className="relative  h-48 overflow-hidden rounded-xl ">
                        <img className="object-cover w-full h-full " src={img} alt="" />
                    </div>
                    <div  className="p-6">
                        
                           
                            <p  className="  text-sm font-medium  py-1  ">
                              <span style={textCol} className="px-[10px] py-[4px] rounded-sm">{categories}</span>
                            </p>
                        
                        <p style={buttonCol} className="block text-xl font-semibold  ">
                           {title}
                        </p>
                    </div>

                </div>
            </NavLink>
        </div>
    );
};

export default CategoryCard;