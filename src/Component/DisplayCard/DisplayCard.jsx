

const DisplayCard = ({ category }) => {

    const { id, img, title, categories, category_bg, card_bg, text_button_bg, description, price } = category || {}

    console.log({ title })
    return (
        <div className="relative h-[700px] w-full">
            <figure className="h-full w-full rounded-xl object-cover object-center">
                <img src={img} alt="" />
            </figure>

            <div className="absolute  bottom-0 w-[calc(100%)]    bg-black/50 py-4 px-6   saturate-200 ">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Donate ${price}</button>
            </div>


        </div>
    );
};

export default DisplayCard;