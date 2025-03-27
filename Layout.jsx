import { Link } from "react-router-dom";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen full-width w-full">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">
            <Link to="/GitProfileStats/" style={{ color: "white"}}>
              GitProfileStats
            </Link>
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/GitProfileStats/" style={{ color: "white" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/GitProfileStats/about" style={{ color: "white" }}>
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className=" bg-gray-50 p-6">{children}</main>

      {/* Footer */}
      <br />
      <footer className="bg-blue-600 text-white p-4">
        <div className="text-center">
          <p>&copy; 2025 GitProfileStats. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
