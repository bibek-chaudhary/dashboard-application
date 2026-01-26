import { useDispatch, useSelector } from "react-redux";
import ProductsTable from "../components/products/ProductsTable";
import type { AppDispatch, RootState } from "../app/store";

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { items, loading, error } = useSelector(
    (state: RootState) => state.products,
  );

  return (
    <div className="p-6">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold">Products</h1>
        <p className="text-gray-500">Browse and manage products data</p>
      </div>

      <div className="mb-4">
        {/* Search placeholder */}
        <div className="h-10 bg-gray-100 rounded" />
      </div>

      <ProductsTable products={items} />

      <div className="flex justify-end mt-4">
        {/* Pagination placeholder */}
        <div className="h-8 w-40 bg-gray-100 rounded" />
      </div>
    </div>
  );
};

export default Products;
