import React, { Component } from 'react'

class StyleShow extends Component {
  
  render() {
    const heading={
      fontSize: '72px'      
    }
    //const newclass =  `badge badge-${this.props.status}`;
    
    heading.fontStyle = 'italic';
    heading.fontSize = '60px';
    
    
    return (
      <div className="row">
        <h2 style={heading} className="col-md-8">
          Style <span className={`badge badge-${this.props.status}`}>New</span>
        </h2>

        <form>
          <label>
            Name:
            <input type="text"></input>
          </label>
        </form>
      </div>
    )
  }
}

export default StyleShow

