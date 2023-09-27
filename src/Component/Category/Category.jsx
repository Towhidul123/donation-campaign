import CategoryCard from "../CategoryCard/CategoryCard";


const Category = ({ category, searchInput }) => {
    console.log(category);

    const filteredCategories = category.filter((item) =>
        item.categories.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
        <div className="mt-96 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCategories.map((category) => (
                <CategoryCard key={category.id} category={category} />
            ))}
        </div>
    );
};

export default Category;