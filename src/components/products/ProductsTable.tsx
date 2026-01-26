type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  stock: number;
};

interface ProductsTableProps {
  products: Product[];
}

const ProductsTable = ({ products }: ProductsTableProps) => {
  return (
    <div className="overflow-x-auto bg-white wounded shadow">
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-500">
          <tr>
            <th className="px-4 py-2 text-left">Title</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-right">Price ($)</th>
            <th className="px-4 py-2 text-right">Stock</th>
          </tr>
        </thead>

        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan={4} className="px-4 py-6 text-center text-gray-500">
                {" "}
                No products available
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product.id} className="border-t">
                <td className="px-4 py-2">{product.title}</td>
                <td className="px-4 py-2">{product.category}</td>
                <td className="px-4 py-2 text-right">{product.price}</td>
                <td className="px-4 py-2 text-right">{product.stock}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
