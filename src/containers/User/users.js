import React, { Component } from "react";
import { Table } from "reactstrap";
import axios from "axios";
import TableRow from "../../components/User/tableRow";
// import { NavLink } from "react-router-dom";

class User extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    console.log("LOLLLLLLLLLLLLLl", this.props);
    axios
      .get("/users")
      .then((response) => {
        const users = response.data.data.map((user) => {
          return {
            ...user,
          };
        });
        this.setState({
          users: users,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //   userSelectedHandler = (id) => {
  //     this.props.history.location.url("/allUsers/" + id);
  //   };

  render() {
    let users = this.state.users.map((user, i) => {
      return (
        <TableRow
          key={i}
          obj={user}
          //   clicked={() => this.userSelectedHandler(user.id)}
        />
      );
    });

    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th colSpan="3">Actions</th>
            </tr>
          </thead>
          <tbody>{users}</tbody>
        </Table>
      </div>
    );
  }
}

export default User;
