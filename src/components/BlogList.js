import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API_URL}/api/blogs`)
      .then(res => setBlogs(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleClick = (id) => {
    navigate(`/blogs/${id}`); // Navigate to BlogDetail page
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">All Blogs</h2>
      <div className="row">
        {blogs.length === 0 ? (
          <p className="text-center">No blogs available</p>
        ) : (
          blogs.map(blog => (
            <div className="col-md-6 mb-3" key={blog.id}>
              <div
                className="card shadow-sm h-100 clickable-card"
                style={{ cursor: "pointer" }}
                onClick={() => handleClick(blog.id)}
              >
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text flex-grow-1 text-truncate" style={{ maxHeight: '80px' }}>
                    {blog.content}
                  </p>
                  <small className="text-muted">Click to view details</small>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogList;
