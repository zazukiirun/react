import React, { Component, useState, useEffect } from 'react'
import Loader from './Loader';
import Person from './Person';
import axios from 'axios';


function NameList() {
  const [persons, setPersons] = useState([{ id: 1, firstname: 'Buck', lastname: 'Berger', age: 40, email: 'React' }]);
  const [error, setError ] = useState(null);
  const [isLoaded, setisLoaded] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/customers")
      .then(response => {
        setPersons(response.data)
        setisLoaded(true);
      }).catch(error => {
        console.log(error);
        setisLoaded(true)
        setError(error);
      });

  },[])



  const personList = persons.map((elem, index) => (
    <Person key={index} person={elem} />

  ));
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {persons.map(elem => (
          <Person key={elem.id} person={elem} />
        ))}
      </ul>
    );
  }
}


class NameList4 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
      isLoaded: false,
      persons: [
        { id: 1, firstname: 'Buck', lastname: 'Berger', age: 40, email: 'React' },
        { id: 2, firstname: 'Adam', lastname: 'Berger2', age: 45, email: 'Angular' },
        { id: 3, firstname: 'Macy', lastname: 'Berger3', age: 30, email: 'Vue' },
      ]
    }
  }


  componentDidMount2() {
    fetch("http://localhost:5000/customers")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            persons: result
          });
          //console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error: error
          });
        }
      )
  }
  componentDidMount() {
    axios.get("http://localhost:5000/customers")
      .then(response => {
        this.setState({
          persons: response.data,
          isLoaded: true
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isLoaded: true,
          error: error
        });
      });

  }
  render() {
    const { error, isLoaded, persons } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {persons.map(elem => (
            <Person key={elem.id} person={elem} />
          ))}
        </ul>
      );
    }
  }

}

export default NameList
