var React = require('react'); 

class Minutes extends React.Component{
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
      if(that.state.minutes < 10){
        that.setState({minutes: "" + 0 + new Date().getMinutes()}) 
      }else{
        that.setState({minutes: new Date().getMinutes()}) 
      }
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

module.exports = Minutes;
