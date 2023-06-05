import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import BlogForm from "../../../components/admin/BlogForm";
import { addBlogToDatabase } from "../../../manager/actions/blogAction";

const AddBlog = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="text-center text-white my-3">Add Blog</h2>
      <BlogForm
        blogSubmit={(fd) => {
          props.dispatch(addBlogToDatabase(fd));
          navigate("/dashboard");
          window.location.reload();
        }}
      />
    </div>
  );
};

export default connect()(AddBlog);
