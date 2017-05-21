var React = require('react'); 
require('../index.css'); 
var Seconds = require('./Seconds.js'); 
var Minutes = require('./Minutes.js');
var Hours = require('./Hours.js'); 

class App extends React.Component{
  render(){
    return (
      <div id='container'>
        <Hours />
        <Minutes />
        <Seconds />
      </div>
    ) 
  }
}

module.exports = App;  

