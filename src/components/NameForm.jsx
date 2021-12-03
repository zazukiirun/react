import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Your name' , description: 'DDDDDDDDD', favorite: 'lime' , count: 0};
  }

  handleNameChange = (event ) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
   
  };
  
  handleFavChange = (evt ) => {
    this.setState( { favorite: evt.target.value} );
  };
  

  handleSubmit = (event) =>{
    console.log('on submit');
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange} />
        </label>
        <p></p>

        <label>
          Description:
          <textarea name="description" value={this.state.description} onChange={this.handleNameChange} />
        </label>
        <p></p>
        <select name="favorite" value={this.state.favorite} onChange={this.handleNameChange} >
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;