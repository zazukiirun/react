import React from 'react' ;

function Welcome2(props) {
  function handleClick(e) {
    e.preventDefault();
    alert('Hi! ' +  props.name);
  }
  return (
    <div >
      <h2>Welcome {props.name}</h2> 
      <button  onClick={handleClick}>alert</button>
    </div>
     
    );
}

const Welcome3 = () =>  <h2>Welcome 5</h2>;

class Welcome extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       //weight : parseInt( props.weight) ,
       weight :  props.weight ,
       name : props.name
    }
    this.increaseW = this.increaseW.bind(this);
  }
  
  increaseW(){
    //this.state.weight = this.state.weight +1 ;
    console.log(this);

    this.setState(  {weight: this.state.weight + 1 }, ()=>{
        console.log(this.state.weight);
      }
        
    );
    
  }

  handleChange = (event) => {    
    this.setState({value: event.target.value});  
  }

  render(){
    //const name = this.props.name;
    //const weight = this.props.weight;
    const {name, weight} = this.props;

    return( 
    <div className="row">
      <h2 className="col-md-7"> Welcome from class {name} weight is {this.state.weight} </h2> 
      <button onClick={this.increaseW.bind(this)} >+</button>
      <button onClick={()=> this.props.greetHandler(this.props.name)}>greet</button>
      <input type="text" value={this.state.value} onChange={this.handleChange} />
    </div>
    );
  }
}

export default Welcome;

