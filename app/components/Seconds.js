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
      if(that.state.seconds < 10){
        console.log(that.state.seconds)
        that.setState({seconds: '0' + new Date().getSeconds()});
      } else {
        that.setState({seconds: new Date().getSeconds()}) 
      }
    }, 500, that)  
  }
  render(){
    return(
      <div>
        <p>:</p>
        <div id='main'>
          {this.state.seconds}
        </div>
      </div>
    );    
  }
}

module.exports = Seconds; 
