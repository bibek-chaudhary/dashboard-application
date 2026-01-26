import ProductsTable from "../components/products/ProductsTable";

const Products = () => {
  return (
    <div className="p-6">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold">Products</h1>
        <p className="text-gray-500">
          Browse and manage products data
        </p>
      </div>

      <div className="mb-4">
        {/* Search placeholder */}
        <div className="h-10 bg-gray-100 rounded" />
      </div>

      <ProductsTable products={[]} />

      <div className="flex justify-end mt-4">
        {/* Pagination placeholder */}
        <div className="h-8 w-40 bg-gray-100 rounded" />
      </div>
    </div>
  );
};

export default Products;
