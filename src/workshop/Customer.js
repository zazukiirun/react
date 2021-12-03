import React, { Component } from "react";

class Customer extends Component {
  onDelete = () => {
    // console.log('customer ', this.props.customer.id);
    this.props.onDelete(this.props.customer.id);
  };

  onEdit = () => {
    // console.log('customer ', this.props.customer.id);
    this.props.onEdit(this.props.customer);
  };

  render() {
    const { id, firstname,lastname, email } = this.props.customer;
    return (
      <tr>
        <td style={{ textAlign: "center" }}>{id}</td>
        <td>{`${firstname} ${lastname}`}</td>
        <td>{email}</td>
        <td>
          <button className="btn m-3 btn-sm btn-warning" onClick={this.onEdit}>
            Edit       
          </button>
          <button className="btn btn-sm btn-danger" onClick={this.onDelete}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Customer;
