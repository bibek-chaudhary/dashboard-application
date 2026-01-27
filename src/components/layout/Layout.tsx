import { useEffect, useState, type ReactNode } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 768); // md breakpoint
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />

      <main className="flex-1 p-6 overflow-auto">
        {/* mobile toggle button */}
        <button
          className="md:hidden mb-4 px-3 py-2 bg-gray-900 text-white rounded"
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
