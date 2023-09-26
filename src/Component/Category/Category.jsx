import CategoryCard from "../CategoryCard/CategoryCard";


const Category = ({category}) => {

    console.log(category)

    return (
        <div className="mt-72 py-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            
             {
                category ?.map(category =><CategoryCard key={category.id} category={category}></CategoryCard>)
             }
            


        </div>



    );
};

export default Category;