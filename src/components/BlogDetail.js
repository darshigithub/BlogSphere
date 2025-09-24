import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId"); // logged-in user ID

  useEffect(() => {
    axios
      .get(`${API_URL}/api/blogs/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      await axios.delete(`${API_URL}/api/blogs/${id}`);
      alert("Blog deleted successfully!");
      navigate(`${API_URL}/api/blogs/`); // Redirect to blogs list after delete
    } catch (error) {
      alert("Failed to delete blog: " + (error.response?.data?.message || error.message));
    }
  };

  if (!blog) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading blog details...</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-sm mx-auto" style={{ maxWidth: "700px" }}>
        <div className="card-body">
          <h2 className="card-title mb-3">{blog.title}</h2>
          <p className="card-text" style={{ whiteSpace: "pre-wrap" }}>{blog.content}</p>
          <small className="text-muted d-block mt-3">Author ID: {blog.userId}</small>

          <div className="d-flex gap-2 mt-3">
            <button className="btn btn-secondary" onClick={() => navigate(-1)}>
              ← Back to Blogs
            </button>

            {/* Show delete button only if logged-in user is the author */}
            {userId && String(userId) === String(blog.userId) && (
              <button className="btn btn-danger" onClick={handleDelete}>
                🗑 Delete Blog
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
