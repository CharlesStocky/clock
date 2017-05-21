var React = require('react'); 

class Minute extends React.Component{
  constructor(){
    super() 
    this.state = {
      minutes: new Date().getMinutes() 
    } 
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount(){
    var that = this; 
    setInterval(function(){
      that.setState({minutes: new Date().getMinutes()}) 
    }, 500, that) 
  }
  render(){
    return(
      <div id='main'>   
        {this.state.minutes}
      </div>
    ); 
  }
}

module.exports = Minute;
