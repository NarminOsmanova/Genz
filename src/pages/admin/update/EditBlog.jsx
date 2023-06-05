import React from "react";
import { Button } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BlogForm from "../../../components/admin/BlogForm";
import {
  editBlogFromDatabase,
  removeBlogFromDatabase,
} from "../../../manager/actions/blogAction";

const EditBlog = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="text-center text-white my-3">Edit Blog</h2>
      <BlogForm
        editblog={props.pvalue}
        blogSubmit={(fd) => {
          dispatch(editBlogFromDatabase(props.pvalue.id, fd));
          navigate("/dashboard");
          window.location.reload();
        }}
      />
      <div className=" mt-2 d-flex align-items-center justify-content-end">
        <div className="col-9">
          <Button
            variant="danger"
            onClick={() => {
              dispatch(removeBlogFromDatabase(props.pvalue.id));
              navigate("/dashboard");
            }}
          >
            <span>
              <i class="fa-solid fa-trash-can"></i>
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const link = window.location.pathname.slice(16, 99);
  return {
    pvalue: state.find((p) => p.id === link),
  };
};
export default connect(mapStateToProps)(EditBlog);
