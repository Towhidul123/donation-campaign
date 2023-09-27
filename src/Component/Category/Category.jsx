import CategoryCard from "../CategoryCard/CategoryCard";
import PropTypes from "prop-types"

const Category = ({ category, searchInput }) => {
    console.log(category);

    // Check if category is an array before filtering
    const filteredCategories = Array.isArray(category)
        ? category.filter((item) =>
            item.categories.toLowerCase().includes(searchInput.toLowerCase())
        )
        : [];

    return (
        <div className="mt-96 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCategories.map((category) => (
                <CategoryCard key={category.id} category={category} />
            ))}
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.array.isRequired,
    searchInput: PropTypes.string.isRequired
};

export default Category;
