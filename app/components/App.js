var React = require('react'); 
require('../index.css'); 
var Seconds = require('./Seconds.js')

function hourStart(){
  var d = new Date();  
  var h = d.getHours(); 
  var t = setTimeout(function(){
  console.log(h);  
  }, h); 
}

function minuteStart(a){
  var d = new Date(); 
  var m = d.getMinutes(); 
  m = checkTime(m); 
  var t = setTimeout(function(){
    console.log(m); 
    return minuteStart(m); 
  }, m); 
}

function checkTime(i){
  if(i < 10){i = '0' + i}
  else if(!i){
    return;
  } 
  return i;  
}



class App extends React.Component{
  render(){
    return (
      <div id='container'>
        <Seconds />
      </div>
    ) 
  }
}

module.exports = App;  

