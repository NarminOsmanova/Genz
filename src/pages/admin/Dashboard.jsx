import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import SingleTable from "../../components/admin/SingleTable";

const Dashboard = (props) => {
  // const selectdata = useSelector((state) => state);
  return (
    <Container>
      <h2 className="text-center text-white">Admin Panel</h2>
      <LinkContainer to="add">
        <Button variant="info" className="text-white">
          Add Blog
        </Button>
      </LinkContainer>
      <Table className="text-white my-5" bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Photo</th>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
            <th>Name</th>
            <th>Person image</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.pvalue
            .slice()
            .reverse()
            .map((item, i) => {
              return (
                <SingleTable
                  count={i}
                  key={i}
                  id={item.id}
                  title={item.title}
                  desc={item.desc}
                  photo={item.photo}
                  name={item.name}
                  date={item.date}
                  img={item.img}
                />
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    pvalue: state,
  };
};

export default connect(mapStateToProps)(Dashboard);
