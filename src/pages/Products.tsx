const Products = () => {
  return (
    <div className="p-6">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold">Products</h1>
        <p className="text-gray-500">Browse and manage products data</p>
      </div>

      {/* Search will go here */}
      <div className="mb-4">
        <div className="h-10 bg-gray-100 rounded" />
      </div>

      {/* Table will go here */}
      <div className="mb-4">
        <div className="h-64 bg-gray-100 rounded" />
      </div>

      {/* Pagination will go here */}
      <div className="flex justify-end">
        <div className="h-8 w-40 bg-gray-100 rounded" />
      </div>
    </div>
  );
};

export default Products;
