import { useDispatch, useSelector } from "react-redux";
import ProductsTable from "../components/products/ProductsTable";
import type { AppDispatch, RootState } from "../app/store";
import { useEffect } from "react";
import { fetchProducts } from "../features/products/productsThunks";
import Loader from "../components/common/Loader";
import Pagination from "../components/common/Pagination";
import { setPage } from "../features/products/productsSlice";

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { items, loading, error, page, limit, search, total } = useSelector(
    (state: RootState) => state.products,
  );

  useEffect(() => {
    dispatch(fetchProducts({ page, limit, search }));
  }, [dispatch, page, limit, search]);
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

      {loading && <Loader />}

      {!loading && error && (
        <div className="bg-red-50 text-red-600 p-4 rounded">
          Failed to load products. Please try again later.
        </div>
      )}

      {!loading && !error && <ProductsTable products={items} />}

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
