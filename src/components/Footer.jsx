import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
        {/* ✅ Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">BlogSphere</h2>
          <p className="mt-2 text-sm">
            Share your ideas with the world. Read, write, and grow with our blog community.
          </p>
        </div>

        {/* ✅ Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-white">Blogs</Link>
            </li>
            <li>
              <Link to="/wishlist" className="hover:text-white">Wishlist</Link>
            </li>
          </ul>
        </div>

        {/* ✅ Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">🌐</a>
            <a href="#" className="hover:text-white">📘</a>
            <a href="#" className="hover:text-white">🐦</a>
            <a href="#" className="hover:text-white">📸</a>
          </div>
        </div>
      </div>

      {/* ✅ Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} BlogSphere. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;