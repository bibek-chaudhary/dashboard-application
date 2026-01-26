interface CategoryFilterProps {
  value: string;
  onChange: (value: string) => void;
}

const CategoryFilter = ({ value, onChange }: CategoryFilterProps) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-3 py-2 border rounded"
    >
      <option value="">All Categories</option>
      <option value="beauty">Beauty</option>
      <option value="Fragrances">Fragrances</option>
      <option value="groceries">Groceries</option>
      <option value="laptops">Laptops</option>
      <option value="skincare">Skin care</option>
      <option value="smartphones">Smartphones</option>
    </select>
  );
};

export default CategoryFilter;
