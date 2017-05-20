var React = require('react'); 

class Hour extends React.Component{
  constructor(props){
    super(props); 
    this.state = {
      hour: this.props.hours 
    } 
    this.update = this.update.bind(this); 
  }, 
  update(props){
   
  }
  render(props){
    return(
      <div    
        onload= {setTimeout({})}
    );  
  }
}
