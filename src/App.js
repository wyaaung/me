import React, { Component } from 'react';
import Sidebar from "./Components/Sidebar";
import Introduction from "./Components/Introduction"
import Education from "./Components/Education"

class App extends Component{
  render(){
    return(
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
        <div id="colorlib-main">
          <Introduction></Introduction>
          <Education></Education>
        </div>
        </div>
      </div>
    );
  }
}



export default App;
