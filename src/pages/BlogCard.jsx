import { Link } from "react-router-dom";

const BlogCard = ({ blog, handleWishlist }) => {
  if (!blog) return null;

  const { _id, title, image, shortDescription, category } = blog;
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 flex flex-col">
      
      {/* Image */}
      <img
        src={image || "https://via.placeholder.com/400"}
        alt={title}
        className="h-48 w-full object-cover rounded-lg"
      />

      {/* Content */}
      <div className="mt-4 flex-grow">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="mt-2 text-gray-600">
          {shortDescription?.slice(0, 80)}...
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex gap-2">
        
        {/* Details Button */}
        <Link
          to={`/blog/${_id}`}
          className="flex-1 text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Details
        </Link>

        {/* Wishlist Button */}
        <button
          disabled={!user}
          onClick={() => handleWishlist(blog)}
          className={`flex-1 py-2 rounded-lg text-white ${
            user
              ? "bg-pink-500 hover:bg-pink-600"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Wishlist 
        </button>
      </div>
    </div>
  );
};

export default BlogCard;