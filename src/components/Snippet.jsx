import React, { Component } from 'react'

class Snippet extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      value = '',   
    };
  }
  
  render() {
    const x = 'variable';
    const y = ' placement '

    console.log(`Log by Snippet  ++++++  ${1+1}  x.x.x  ${y}`);

    return (
      <div>
        <img src=""></img>
      </div>
    )
  }
}

export default Snippet
