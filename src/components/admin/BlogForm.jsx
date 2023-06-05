import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
// import { removeBlog } from "../../manager/actions/blogAction";

const BlogForm = ({ blogSubmit, editblog }, props) => {
  const [blogphoto, setPhoto] = useState(editblog ? editblog.photo : "");
  const [blogtitle, setTitle] = useState(editblog ? editblog.title : "");
  const [blogdesc, setDesc] = useState(editblog ? editblog.desc : "");
  const [blogdate, setDate] = useState(editblog ? editblog.date : "");
  const [blogname, setName] = useState(editblog ? editblog.name : "");
  const [blogimg, setImg] = useState(editblog ? editblog.img : "");

  const formSubmit = (e) => {
    e.preventDefault();
    if (!blogphoto || !blogtitle || !blogdesc) {
      alert("Please, fill the input");
    } else {
      blogSubmit({
        photo: blogphoto,
        title: blogtitle,
        desc: blogdesc,
        date: blogdate,
        name: blogname,
        img: blogimg,
      });
    }
  };
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="col-6">
        <Form onSubmit={formSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="text-white">Photo</Form.Label>
            <Form.Control
              type="text"
              value={blogphoto}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="Enter photo"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-white">Title</Form.Label>
            <Form.Control
              type="text"
              value={blogtitle}
              placeholder="Enter title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-white">Description</Form.Label>
            <Form.Control
              type="text"
              value={blogdesc}
              placeholder="Enter description"
              onChange={(e) => setDesc(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-white">Date</Form.Label>
            <Form.Control
              type="text"
              value={blogdate}
              placeholder="Enter date"
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-white">Name</Form.Label>
            <Form.Control
              type="text"
              value={blogname}
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              value={blogimg}
              placeholder="Enter image"
              onChange={(e) => setImg(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            {editblog ? "Save" : "Add"}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default BlogForm;
