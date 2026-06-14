import { useQuery } from "@tanstack/react-query";
import axios from "../api/axios";
import { Link } from "react-router-dom";

const AllBlogs = () => {
  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axios.get("/blogs");
      return res.data;
    },
  });

  if (isLoading)
    return (
      <p className="text-center mt-10 text-lg">Loading...</p>
    );

  return (
    <div className="px-6 md:px-10 py-8 bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      
      <h2 className="text-violet-500 text-center mb-10 font-bold text-3xl">
        All Blogs
      </h2>

      {/* 🔥 Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        {blogs.map((blog) => (
          <div
            key={blog._id}
             className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl 
  shadow-[0_4px_10px_rgba(0,0,0,0.1)] 
  hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)] 
  hover:-translate-y-2 
  active:scale-95 
  transition-all duration-300 overflow-hidden flex flex-col"
          >
            {/* Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="h-48 w-full object-cover
               transition-transform duration-300 hover:scale-105"
            />

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-bold mb-2">
                {blog.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow">
                {blog.shortDescription?.slice(0, 80)}...
              </p>

              {/* Button */}
              <Link
                to={`/blog/${blog._id}`}
                className="mt-4 inline-block text-center bg-violet-500 text-white py-2 rounded-lg hover:bg-violet-600 transition"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default AllBlogs;