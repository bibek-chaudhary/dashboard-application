const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-2">
        Dashboard
      </h1>

      <p className="text-gray-600 mb-6">
        Welcome to the dashboard application.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-sm text-gray-500">
            Total Products
          </h2>
          <p className="text-2xl font-bold">—</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-sm text-gray-500">
            Categories
          </h2>
          <p className="text-2xl font-bold">—</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-sm text-gray-500">
            Status
          </h2>
          <p className="text-2xl font-bold">Active</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
