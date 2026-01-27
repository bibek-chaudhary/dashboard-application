import { NavLink } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

const Sidebar = ({ isOpen, toggle }: SidebarProps) => {
  return (
    <>
      {/* overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={toggle}
        />
      )}

      <aside
        className={`fixed md:static z-30 h-screen bg-gray-900 text-white
        transition-all duration-300
        ${isOpen ? "w-64" : "w-0 md:w-64"}
        overflow-hidden`}
      >
        <div className="p-4 text-xl font-bold border-b border-gray-700 flex justify-between">
          Dashboard
          <button className="md:hidden" onClick={toggle}>
            ✕
          </button>
        </div>

        <nav className="p-4 space-y-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${
                isActive ? "bg-gray-700" : "hover:bg-gray-800"
              }`
            }
            onClick={toggle}
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${
                isActive ? "bg-gray-700" : "hover:bg-gray-800"
              }`
            }
            onClick={toggle}
          >
            Products
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
