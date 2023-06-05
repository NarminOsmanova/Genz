import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { removeBlogFromDatabase } from "../../manager/actions/blogAction";

const SingleTable = ({ count, title, photo, desc, id, date, name, img }) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{count + 1}</td>
      <td>
        <img src={photo} width={50} alt="" />
      </td>
      <td>{title}</td>
      <td>{desc}</td>
      <td>{date}</td>
      <td>{name}</td>
      <td>{img}</td>
      <td>
        <LinkContainer to={`edit/${id}`}>
          <Button variant="warning">
            <span>
              <i className="fa-solid fa-pen-to-square"></i>
            </span>
          </Button>
        </LinkContainer>
      </td>
      <td>
        <Button
          variant="danger"
          onClick={() => {
            dispatch(removeBlogFromDatabase(id));
          }}
        >
          <span>
            <i className="fa-solid fa-trash-can"></i>
          </span>
        </Button>
      </td>
    </tr>
  );
};

export default SingleTable;
