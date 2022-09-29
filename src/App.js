import React from 'react'
import Nav from './components/nav';
import Header from './components/Header';
import Events from './components/Events';
import Offer from './components/Offer';
import About from './components/About';
import AboutZ from './components/AboutZ';
import Ourteam from './components/Ourteam';
import Accordion from './components/Accordion';
// import Particlebg from './components/Particlebg';


function App() {
  return (
    <div className="App">
      {/* <Particlebg /> */}
      <Nav/>
      <Header/>
      <Events/>
      <Offer/>
      {/* <AboutZ/> */}
      <Ourteam/>
      <Accordion/>
    </div>
  );
}

export default App;
