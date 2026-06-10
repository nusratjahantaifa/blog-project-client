import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <div className="flex justify-between p-4 bg-white shadow">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/add-blog">Add Blog</Link>
        <Link to="/blogs">All Blogs</Link>
        <Link to="/wishlist">Wishlist</Link>
      </div>

      <div>
        {user ? (
          <>
            <img src={user.photoURL} alt="" className="w-8 h-8 rounded-full inline" />
            <button onClick={logoutUser}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;