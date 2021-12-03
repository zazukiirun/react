import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
//import 'semantic-ui-css/semantic.min.css';
import CustomerList from './CustomerList';
import MyForm from './MyForm';
import axios from 'axios';
import Loader from './Loader';


class App extends Component {
  state = {
    customers: [],
    loader: false,
    customer: {},
    url0: "http://localhost/laravel-rest-api/public/api/customers",
    url: "http://localhost:5000/customers"
  };

  getCustomers = async () => {
    this.setState({ loader: true });
    const customers = await axios.get(this.state.url);
    this.setState({ customers: customers.data, loader: false });
  };

  deleteCustomer = async id => {
    this.setState({ loader: true });

    await axios.delete(`${this.state.url}/${id}`).catch(e => {
      // console.log(e.message);
      alert(e.response.status === 404 ? "Customer not found" : "");
    });

    this.getCustomers();
  };

  createCustomer = async data => {
    this.setState({ loader: true });

    await axios
      .post(this.state.url, {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email
      })
      .catch(e => {
        // console.log(e.message)
        alert(e.response.status === 500 ? "Email already exists" : "");
      });

    this.getCustomers();
  };

  editCustomer = async data => {
    // clear customer obj
    this.setState({ customer: {} });

    this.setState({ loader: true });

    await axios
      .put(`${this.state.url}/${data.id}`, {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email
      })
      .catch(e => {
        console.log(e.message);
      });

    this.getCustomers();
  };

  componentDidMount0() {
    this.getCustomers();
  }

  componentDidMount(){
    axios.get(this.state.url)
    .then( response => {
      this.setState( {customers: response.data ,
                      loader: false});
    })
    .catch( error => {
      console.log(error);
    });
  }

  onDelete = id => {
    // console.log("app ", id);
    this.deleteCustomer(id);
  };

  onEdit = data => {
    // console.log("app ", data);
    this.setState({ customer: data });
  };

  onFormSubmit = data => {
    // console.log("app ", data);
    // return;
    // console.log("app ", data);
    if (data.isEdit) {
      // if is edit true
      this.editCustomer(data);
    } else {
      // if is edit false
      this.createCustomer(data);
    }
  };

  render() {
    return (
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>Manage <b>Employees</b></h2>
                </div>
                <div className="col-sm-6"> 
                  <button  className="btn btn-sm btn-success" data-toggle="modal"> <span>Add New Employee</span></button>
                  <button  className="btn btn-sm btn-danger" data-toggle="modal"><i className="bi-alarm"></i> <span>Delete</span></button>
                </div>
              </div>
            </div>
            

            <div >
              <MyForm
                onFormSubmit={this.onFormSubmit}
                customer={this.state.customer}
              />
              {this.state.loader ? <Loader /> : ""}
              <CustomerList
                customers={this.state.customers}
                onDelete={this.onDelete}
                onEdit={this.onEdit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
