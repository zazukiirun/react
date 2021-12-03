import React from 'react'

function withCounter(WrappedComponent) {


  class WithCounter extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
          count: 0
        }
      }

      incrementCount = () => {
        this.setState(prevState => {
          return {count: prevState.count + 1}
        });
      }

    render(){
      const {count} = this.state;
      const {...oldProps} = this.props;

      return <WrappedComponent  count={count}  incrementCount={this.incrementCount}  {...oldProps}  />
    }

  }
  
  return WithCounter;
}

export default withCounter;


