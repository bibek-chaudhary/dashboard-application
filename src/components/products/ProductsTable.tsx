import { useState } from "react";
import type { Product } from "../../features/products/productsTypes";

interface ProductsTableProps {
  products: Product[];
}

const ProductsTable = ({ products }: ProductsTableProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const closeModal = () => setSelectedProduct(null);

  return (
    <div className="w-full">
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-right">Price ($)</th>
              <th className="px-4 py-2 text-right">Stock</th>
              <th className="px-4 py-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-gray-500">
                  No products available
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr
                  key={product.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-2">{product.title}</td>
                  <td className="px-4 py-2">{product.category}</td>
                  <td className="px-4 py-2 text-right">{product.price}</td>
                  <td className="px-4 py-2 text-right">{product.stock}</td>
                  <td className="px-4 py-2 text-center">
                    <button
                      className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                      onClick={() => setSelectedProduct(product)}
                    >
                      Show Details
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden flex flex-col gap-4">
        {products.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            No products available
          </div>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded shadow flex flex-col gap-2"
            >
              <div className="font-semibold text-lg">{product.title}</div>
              <div className="text-gray-500">{product.category}</div>
              <div className="flex justify-between text-sm">
                <span>Price: ${product.price}</span>
                <span>Stock: {product.stock}</span>
              </div>
              <button
                className="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={() => setSelectedProduct(product)}
              >
                Show Details
              </button>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded shadow-lg w-full max-w-md mx-4 p-6 relative
                 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            s{/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold"
              onClick={closeModal}
            >
              ✕
            </button>
            {/* Product Image */}
            {selectedProduct.images &&
              selectedProduct.images.map((imgage) => (
                <img
                  src={imgage}
                  alt={selectedProduct.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              ))}
            {/* Product Info */}
            <h2 className="text-xl font-bold mb-2">{selectedProduct.title}</h2>
            <p className="mb-2">
              <span className="font-semibold">Category:</span>{" "}
              {selectedProduct.category}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Price:</span> $
              {selectedProduct.price}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Stock:</span>{" "}
              {selectedProduct.stock}
            </p>
            {selectedProduct.description && (
              <p className="mb-2">{selectedProduct.description}</p>
            )}
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsTable;
