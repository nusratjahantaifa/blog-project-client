import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const BlogDetails = () => {
  const { id } = useParams(); // blog id from URL
  const { user } = useContext(AuthContext);

  const [comment, setComment] = useState("");

  // Get single blog
  const { data: blog = {}, isLoading } = useQuery({
    queryKey: ["blog", id],
    queryFn: async () => {
      const res = await axios.get(`/blogs/${id}`);
      return res.data;
    },
  });

  // Get comments
  const { data: comments = [], refetch } = useQuery({
    queryKey: ["comments", id],
    queryFn: async () => {
      const res = await axios.get(`/comments/${id}`);
      return res.data;
    },
  });

  if (isLoading) return <h2>Loading...</h2>;

  //Comment submit
  const handleComment = async () => {
    if (!comment) return toast.error("Write something!");

    try {
      await axios.post("/comments", {
        blogId: id,
        text: comment,
        userName: user?.displayName,
        userPhoto: user?.photoURL,
        email: user?.email,
      });

      toast.success("Comment added");
      setComment("");
      refetch(); // reload comments
    } catch {
      toast.error("Failed to comment");
    }
  };

  return (
    <div style={{ padding: "20px",marginBottom: "10px" }}>
      <h1>{blog.title}</h1>
      <img src={blog.image} style={{ width: "100%" }} />
      <p>{blog.shortDescription}</p>
      <p>{blog.longDescription}</p>

      {/* Comment Section */}
    

      {/* Condition: user cannot comment own blog */}
      {blog.email === user?.email ? (
        <p style={{ color: "red" }}>
          You cannot comment on your own blog ⚠️
        </p>
      ) : (
        <div className="my-6 ">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your comment..."
          />
          <br />
          <button onClick={handleComment} className="btn btn-secondary">Submit</button>
        </div>
      )}

      {/* Show comments */}
      <div>
        {comments.map((c) => (
          <div key={c._id} style={{ marginTop: "10px" }}>
            <img
              src={c.userPhoto}
              width="30"
              style={{ borderRadius: "50%" }}
            />
            <strong>{c.userName}</strong>
            <p>{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;