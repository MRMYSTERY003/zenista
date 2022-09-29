import React from 'react'
import Nav from './components/nav';
import Header from './components/Header';
import Events from './components/Events';
import Offer from './components/Offer';
import Ourteam from './components/Ourteam';
import Accordion from './components/Accordion';
// import AboutZ from './components/AboutZ';
// import Particlebg from './components/Particlebg';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Events/>
      {/* <AboutZ/> */}
      <Offer/>
      <Ourteam/>
      <Accordion/>
      {/* <Particlebg/> */}
    </div>
  );
}

export default App;
