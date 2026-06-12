/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import axios from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { 
  TextField, 
  Button, 
  Typography, 
  Box, 
  Paper,
  MenuItem
} from "@mui/material";

// Predefined categories to avoid user typos and keep data organized
const CATEGORIES = [
  "Technology",
  "Travel",
  "Lifestyle",
  "Health & Wellness",
  "Food",
  "Business & Finance"
];

const AddBlog = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
 
  const [form, setForm] = useState({
    title: "",
    image: "",
    category: "",
    shortDescription: "",
    longDescription: "",
  }); 

  // Direct unauthenticated users away gracefully
  if (!user) {
    return (
      <Box style={{ textAlign: "center", marginTop: "50px" }}>
        <Typography variant="h5" color="error">Please login to add a blog</Typography>
      </Box>
    );
  }

  // Handle input change smoothly
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit blog action
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verification check
    if (
      !form.title.trim() ||
      !form.image.trim() ||
      !form.category ||
      !form.shortDescription.trim() ||
      !form.longDescription.trim()
    ) {
      return toast.error("All fields are required! ⚠️");
    }

    try {
      const blogData = {
        ...form,
        authorName: user?.displayName || "Anonymous",
        authorPhoto: user?.photoURL || "",
        authorEmail: user?.email, // Storing email is highly recommended for filtering posts later
        createdAt: new Date()
      };

      await axios.post("/blogs", blogData);

      toast.success("Blog published successfully! 🎉");
      navigate("/"); 
    } catch (error) {
      toast.error("Failed to add blog. Please try again.");
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="85vh" padding="20px">
      <Paper elevation={4} style={{ padding: "40px", maxWidth: "600px", width: "100%", borderRadius: "12px" }}>
        <Typography variant="h4" fontWeight="700" textAlign="center" gutterBottom color="primary">
          Create New Post
        </Typography>
        <Typography variant="body2" textAlign="center" color="textSecondary" style={{ marginBottom: "30px" }}>
          Share your ideas, stories, and knowledge with the world.
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" gap="20px">
            <TextField
              label="Blog Title"
              name="title"
              variant="outlined"
              fullWidth
              value={form.title}
              onChange={handleChange}
            />

            <TextField
              label="Image URL"
              name="image"
              variant="outlined"
              fullWidth
              value={form.image}
              onChange={handleChange}
            />

            <TextField
              select
              label="Select Category"
              name="category"
              variant="outlined"
              fullWidth
              value={form.category}
              onChange={handleChange}
            >
              {CATEGORIES.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Short Description"
              name="shortDescription"
              variant="outlined"
              multiline
              rows={2}
              fullWidth
              value={form.shortDescription}
              onChange={handleChange}
              inputProps={{ maxLength: 150 }}
              helperText={`${form.shortDescription.length}/150 characters max`}
            />

            <TextField
              label="Long Description / Blog Content"
              name="longDescription"
              variant="outlined"
              multiline
              rows={6}
              fullWidth
              value={form.longDescription}
              onChange={handleChange}
            />

            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              size="large"
              style={{ marginTop: "10px", padding: "12px", fontWeight: "bold", borderRadius: "8px" }}
            >
              Publish Blog
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default AddBlog;
