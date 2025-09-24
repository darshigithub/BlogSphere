import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";

const BlogForm = () => {
  const [formData, setFormData] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("Please login first");
      return;
    }

    try {
      await axios.post(`${API_URL}/api/blogs`, { ...formData, user: { id: userId } });
      alert("Blog created successfully!");
      setFormData({ title: "", content: "" });

      // Redirect to home page
      navigate("/"); 
    } catch (error) {
      alert("Failed to create blog: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm p-4">
            <h2 className="card-title mb-4 text-center">Create Blog</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  placeholder="Blog Title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="content"
                  className="form-control"
                  placeholder="Blog Content"
                  value={formData.content}
                  onChange={handleChange}
                  rows="6"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-2">
                Create Blog
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
