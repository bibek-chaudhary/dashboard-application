import { useDispatch, useSelector } from "react-redux";
import ProductsTable from "../components/products/ProductsTable";
import type { AppDispatch, RootState } from "../app/store";
import { useEffect, useState } from "react";
import { fetchProducts } from "../features/products/productsThunks";
import Loader from "../components/common/Loader";
import Pagination from "../components/common/Pagination";
import {
  setCategory,
  setPage,
  setSearch,
} from "../features/products/productsSlice";
import SearchInput from "../components/common/SearchInput";
import CategoryFilter from "../components/common/CategoryFilter";

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { items, loading, error, page, limit, search, total, category } =
    useSelector((state: RootState) => state.products);

  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    dispatch(fetchProducts({ page, limit, search: debouncedSearch, category }));
  }, [dispatch, page, limit, debouncedSearch, category]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 400);

    return () => clearTimeout(handler);
  }, [search]);
  return (
    <div className="p-6">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold">Products</h1>
        <p className="text-gray-500">Browse and manage products data</p>
      </div>

      <div className="mb-4 flex flex-col md:flex-row gap-4">
        <SearchInput
          value={search}
          onChange={(value) => dispatch(setSearch(value))}
          placeholder="Search products..."
        />

        <CategoryFilter
          value={category}
          onChange={(value) => dispatch(setCategory(value))}
        />
      </div>

      {loading && <Loader />}

      {!loading && !error && items.length === 0 && (
        <div className="text-center text-gray-500 py-10">No products found</div>
      )}

      {!loading && !error && items.length > 0 && (
        <ProductsTable products={items} />
      )}

      <div className="flex justify-end mt-4">
        <Pagination
          currentPage={page}
          total={total}
          limit={limit}
          onPageChange={(newPage) => {
            if (!loading) {
              dispatch(setPage(newPage));
            }
          }}
        />
      </div>
    </div>
  );
};

export default Products;
