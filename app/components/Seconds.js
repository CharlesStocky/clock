var React = require('react');

class Seconds extends React.Component{
  constructor(){
    super(); 
    this.state = {
      seconds: new Date().getSeconds()    
    }
    this.componentDidMount = this.componentDidMount.bind(this); 
  }
  componentDidMount(){
    var that = this;
    setInterval(function(){
      console.log(that.state.seconds)
      that.setState({seconds: new Date().getSeconds()});
    }, 500, that);  
  }
  render(){
    return(
      <div>
        <p>asdfasd</p>
        <p id='colon'>:</p>
        <div>
          {this.state.seconds}
        </div>
      </div>
    );    
  }
}

module.exports = Seconds; 
