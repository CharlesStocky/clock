var React = require('react'); 

class Hours extends React.Component{
  constructor(){
    super(); 
    this.state = {
      hour: new Date().getHours() 
    } 
    this.componentDidMount = this.componentDidMount.bind(this); 
  }
  componentDidMount(){
    var that = this;
    setInterval(function(){
      if(that.state.hour < 10){
        that.setState({hour: '0' + new Date().getHours()});  
      }else{
        that.setState({hour: new Date().getHours()}); 
      } 
    }, 500, that)
  }
  render(props){
    return(
      <div>    
        <div id='main'>
          {this.state.hour}
        </div>
        <p>:</p>
      </div>
    );  
  }
}

module.exports = Hours; 
