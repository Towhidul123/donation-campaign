

const Banner = () => {
    return (
        <div className="">
            <div className="absolute h-full w-full inset-0 top-0 -z-10">
                <div className="hero z-10 min-h-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/8NgbD08/fc1f79e18cdc1a12320b9b10ec3e253d.jpg)' }}>

                    <div className="hero-overlay  "></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>


                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute min-h-[600px] bg-white h-full inset-0 w-full bg-opacity-60 top-0 -z-10"></div>
        </div>
    );
};

export default Banner;