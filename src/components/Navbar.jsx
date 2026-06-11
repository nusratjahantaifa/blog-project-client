import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <div className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* ✅ Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          BlogSphere
        </h1>

        {/* ✅ Menu */}
        <div className="flex items-center gap-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/add-blog" className="hover:text-blue-600 transition">
            Add Blog
          </Link>
          <Link to="/blogs" className="hover:text-blue-600 transition">
            All Blogs
          </Link>
          <Link to="/wishlist" className="hover:text-blue-600 transition">
            Wishlist
          </Link>
        </div>

        {/* ✅ Right Side */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              {/* Profile */}
              <img
                src={user.photoURL}
                alt="user"
                className="w-9 h-9 rounded-full border"
              />

              {/* Logout Button */}
              <button
                onClick={logoutUser}
                className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-1 border rounded-lg hover:bg-gray-100"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;