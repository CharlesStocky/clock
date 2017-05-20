var React = require('react');

class Seconds extends React.Component{
  constructor(props){
    super(); 
    this.state = {
      seconds: new Date().getSeconds()    
    }
    this.componentDidMount = this.componentDidMount.bind(this); 
  }
  componentDidMount(){
    var that = this;
    setInterval(function(){
      console.log(that.state.seconds); 
    }, 500, that);  
  }
  render(){
    return(
      <div>
        <p>asdfasd</p>
        <div 
          dangerouslySetInnerHTML={{__html: this.state.seconds.value}}>
        </div>
      </div>
    );    
  }
}

module.exports = Seconds; 
