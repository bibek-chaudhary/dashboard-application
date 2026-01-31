import { useEffect, useState, type ReactNode } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar
        isOpen={isOpen}
        toggle={() => setIsOpen(!isOpen)}
      />

      {isOpen && window.innerWidth < 768 && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsOpen(false)}
        />
      )}

      <main className="flex-1 p-4 md:p-6 overflow-auto transition-all duration-300">
        <button
          className="md:hidden mb-4 px-3 py-2 bg-gray-900 text-white rounded shadow"
          onClick={() => setIsOpen(true)}
        >
          ☰ Menu
        </button>
        {children}
      </main>
    </div>
  );
};

export default Layout;
