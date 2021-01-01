import React, { Component } from 'react';
import Sidebar from "./Components/Sidebar";
import Introduction from "./Components/Introduction"
import Education from "./Components/Education"
import Technical from "./Components/Technical Skills"

class App extends Component{
  render(){
    return(
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
        <div id="colorlib-main">
          <Introduction></Introduction>
          <Education></Education>
          <Technical></Technical>
        </div>
        </div>
      </div>
    );
  }
}



export default App;
