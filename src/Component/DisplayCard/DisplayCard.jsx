import swal from "sweetalert";


const DisplayCard = ({ category }) => {

    const { id, img, title, categories, category_bg, card_bg, text_button_bg, description, price } = category || {}

    const buttonBgStyle ={
        backgroundColor: category_bg,
    };

    const handleDonate = () =>{
      //  console.log(category);

      const addedItems =[];

      const items = JSON.parse(localStorage.getItem('test'))
     //   console.log(items)

        if(!items){
            addedItems.push(category)
            localStorage.setItem('test',JSON.stringify(addedItems))
            swal("Good job!", "Products added!", "success");
        }

        else{

            const ifExist = items.find(category => category.id == id)
            
            if(!ifExist){
                addedItems.push(...items,category)
                localStorage.setItem('test',JSON.stringify(addedItems))
                swal("Good job!", "Products added!", "success");
            }

           
            else{
                swal("Oops!", "Product already exists!", "error");
            }
        }
       
    }

 
   
   
    

    return (

       
        <div >
            <div className="relative ">



                <figure className="">
                    <img className="h-[700px] w-full object-cover object-center" src={img} alt="" />
                </figure>

                <div className="absolute  bottom-0 w-[calc(100%)]    bg-black/50 py-4 px-6   saturate-200 ">
                    <button onClick={handleDonate} style={buttonBgStyle} className={`btn  btn-xs  sm:btn-sm md:btn-md lg:btn-lg text-white`}>Donate ${price}</button>
                </div>

            </div>

            <div>
                <h2 className="text-[40px] font-bold text-[#0B0B0B]">{title}</h2>
                <p className="text-base text-[#545454]">{description}</p>

                
            </div>

                

        </div>




    );
};

export default DisplayCard;