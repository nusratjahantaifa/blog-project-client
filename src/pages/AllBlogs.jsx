
import { useQuery } from "@tanstack/react-query";
import axios from "../api/axios";

const AllBlogs = () => {

  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axios.get("/blogs");
      return res.data;
    }
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="mx-10 ">
      <h2 className="text-violet-500 text-center mb-8 font-bold text-3xl p-4 ">All Blogs</h2>

      {blogs.map(blog => (
       <div className="my-6 h-80 w-96">
         <div key={blog._id}>
          <img src={blog.image} alt={blog.title} width="200" />
          <h3>{blog.title}</h3>
          <p>{blog.shortDescription}</p>
        </div>
       </div>
      ))}
    </div>
  );
};

export default AllBlogs;