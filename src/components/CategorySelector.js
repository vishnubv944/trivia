import "bootstrap/dist/css/bootstrap.css";
import categories from "../categories";
function CategorySelector({ category, chooseCategory, getQuestion }) {
  return (
    <div className="input">
      <h3>Select Category</h3>
      <select
        class="form-select"
        aria-label="Default select example"
        value={category}
        onChange={(e) => {
          chooseCategory(e.target.value);
        }}
      >
        {categories.map((category, index) => (
          <option key={index} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategorySelector;
