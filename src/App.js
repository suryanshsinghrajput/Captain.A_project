import logo from './logo.svg';
import './App.css';
import localImageDiamondMoon from "./images/CapA.jpg";
import ShowImageAgain from "./components/ShowImageAgain";
import ShowSomeStuff from "./components/ShowSomeStuff";
// import NavBar from "./components/NavBar";
import { useState } from 'react';
import { useEffect } from 'react';
import React from "react";
// import { Router, Route, Switch } from "react-router-dom";
// import { Container } from "reactstrap";

// import Loading from "./components/Loading";
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
// import Home from "./views/Home";



let string1 = `CAPTAIN AMERICA`;
let somemessage1 = "keep scrolling for more things";
let someObject1 = {
  // name : `Suryansh`,
  // profession : `student`,
  // purpose : `just love yourself`,
  // totalExperience : 10,
  // numberOfHoursSleepingEveryDay : 10,
  // lifeMotto : `Work Hard Dream Big`
}
let someObject2 = {
  // name : `Rajput`,
  // profession : `middle`,
  // purpose : `fight crime`,
  // totalExperience : 69,
  // numberOfHoursSleepingEveryDay : 0,
  // lifeMotto : `I am Batman`
}

const someInput = () => (
<div>

</div>
);


function App() {

  function clearEverything()
{
    console.log(`input has been cleared`);
    setquoteContent(`Your response has been submitted`);
}  

function clearEverything2()
{
    console.log(`input has been cleared`);
    setquoteContent2(`Your response has been submitted`);
}  



  const [quoteContent, setquoteContent] = useState('');
  const [quoteContent2, setquoteContent2] = useState('');
  useEffect(() => {
    console.log(quoteContent);
    console.log(quoteContent2);

}, [quoteContent,quoteContent2]);  



  return (
    
  
    <div className="App">










      
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">
    NAVBAR
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">
          Home <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Features
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Pricing
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown link
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">
            Action
          </a>
          <a className="dropdown-item" href="#">
            Another action
          </a>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </div>
      </li>
    </ul>
  </div>
</nav> 
      {/* <div>
        <p>
          -:HELLO THERE :-
        </p>
        <input type="text" 
                    className="form-control" 
                    placeholder="ENTER SOMETHING"
                    onChange={e => setquoteContent(e.target.value)}
                    value={quoteContent} >
        </input>
        <div>
      <button
        type = "button"
        className= "btn btn-primary"
        onClick={clearEverything}>
          Primary</button>
       
      </div>
       
        <hr></hr>
        <h2>{quoteContent}</h2>
        <input type="text" 
                    className="form-control" 
                    placeholder="ENTER SOMETHING2"
                    onChange={e => setquoteContent2(e.target.value)}
                    value={quoteContent2} >
        </input>
        <div>
      <button
        type = "button"
        className= "btn btn-primary"
        onClick={clearEverything2}>
          Primary</button>
       
      </div>
      </div> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React. 
        </a>
      
        <p>Note : Scroll down to see a simple image display.</p>
        <p>{somemessage1}</p>
        
      </header> */}
      <div className="text-center hero my-5">
        {/* <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" /> */}
        <h1 className="mb-4">{string1}</h1>   
        <img src={localImageDiamondMoon} className="img-fluid" alt="..."></img>
      </div> 
      
      <div>
        <ShowImageAgain/>
      </div>   
      <div>
        <p>
          -: ???????????????? are ???????????????? ????/???? ???????? ???????????? ???????????? ???? ???????????? ???????? ???????????????????????????? ???????????????????????????? ???? ???????????????? ???????????????? ???????? ???????????????????????? ???????????????? ???????????????????????????????????? :-
        </p>
        <p>
          1-From what material is Captain America's shield made?
        </p>
        <input type="text" 
                    className="form-control" 
                    placeholder="Answer here"
                    onChange={e => setquoteContent(e.target.value)}
                    value={quoteContent} >
        </input>
        <div>
      <button
        type = "button"
        className= "btn btn-primary"
        onClick={clearEverything}>
          submit</button>
       
      </div>
       
        <hr></hr>
        <h2>{quoteContent}</h2>

        <p>
          2-What is Captain America's full name?
        </p>
        <input type="text" 
                    className="form-control" 
                    placeholder="Answer here"
                    onChange={e => setquoteContent2(e.target.value)}
                    value={quoteContent2} >
        </input>
        <div>
      <button
        type = "button"
        className= "btn btn-primary"
        onClick={clearEverything2}>
       submit</button>
       
      </div>
      </div>
      <div>
        <p>
          -
        </p>
        <p>???????????????????????? ???????????? ???????????????? ????????????????????????????????.</p>
        
        <ShowSomeStuff someObject1 = {someObject1} someObject2 = {someObject2} />
        <p>| : ???????????????? ???????????? ???????????????????????????? : |</p>
      </div>      
      <ShowSomeStuff someObject1 = {someObject1} someObject2 = {someObject2} />  
    </div>
  );
}

export default App;
