
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
    <div>
      <h2>All Blogs</h2>

      {blogs.map(blog => (
        <div key={blog._id}>
          <img src={blog.image} alt={blog.title} width="200" />
          <h3>{blog.title}</h3>
          <p>{blog.shortDescription}</p>
        </div>
      ))}
    </div>
  );
};

export default AllBlogs;