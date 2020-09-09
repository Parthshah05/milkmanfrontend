import React from "react";
import axios from "axios";
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const TableRow = (props) => {
  const deleteUserHandler = () => {
    console.log("User ID: ", props.obj.id);
    axios.delete("/allUsers/" + props.obj.id).then((response) => {
      console.log("DELETE PAGE........", response);
      window.location.reload();
    });
  };

  return (
    <tr>
      <td>{props.obj.id}</td>
      <td>{props.obj.first_name}</td>
      <td>{props.obj.last_name}</td>
      <td>{props.obj.email}</td>
      <td>
        <NavLink to={"/editUser/" + props.obj.id}>Edit</NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button color="danger" onClick={deleteUserHandler}>
          Delete
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {/* <Button color="secondary" onClick={props.clicked}>
          Select
        </Button> */}
      </td>
    </tr>
  );
};

export default TableRow;
