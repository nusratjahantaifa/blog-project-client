import { useQuery } from "@tanstack/react-query";
import axios from "../api/axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
const { user } = useContext(AuthContext);
  // ✅ Fetch blogs using React Query
  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axios.get("/blogs");
      return res.data;
    },
  });

  if (isLoading) return <h2>Loading...</h2>;

  // ✅ Show only 6 blogs
  const recentBlogs = blogs.slice(0, 6);

  // ✅ Wishlist handler (single)
const handleWishlist = async (blog) => {
  if (!user) {
    toast.error("Please login first!");
    return;
  }

  try {
    const wishlistData = {
      blogId: blog._id,
      title: blog.title,
      image: blog.image,
      category: blog.category,
      email: user.email, // ✅ REAL USER
    };

    const res = await axios.post("/wishlist", wishlistData);

    if (res.data.message === "Already added") {
      toast.error("Already in wishlist ❌");
    } else {
      toast.success("Added to wishlist ❤️");
    }
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    toast.error("Something went wrong!");
  }
};
  return (
    <div style={{ padding: "20px" }}>
      <h1>Recent Blogs 🚀</h1>

     <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  }}
>
        {recentBlogs.map((blog) => (
          <Card key={blog._id}>
            <img
              src={blog.image}
              alt={blog.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />

            <CardContent>
              <Typography variant="h6">{blog.title}</Typography>
             <Typography>
  {blog.shortDescription?.slice(0, 80)}...
</Typography>
              <Typography color="primary">{blog.category}</Typography>

              {/* ✅ Details Button */}
              <Button
                variant="contained"
                style={{ marginTop: "10px" }}
                onClick={() => navigate(`/blog/${blog._id}`)}
              >
                Details
              </Button>

              {/* ✅ Wishlist Button */}
              <Button
               disabled={!user}
                variant="outlined"
                style={{ marginTop: "10px", marginLeft: "10px" }}
                onClick={() => handleWishlist(blog)}
              >
                Wishlist
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;