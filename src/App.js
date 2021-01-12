import React,{useState} from 'react';
import logo from './logo.svg';
// import './App.css';
// import './Card.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowRight } from 'react-bootstrap-icons';
import Conditional from './Conditional'
import Card from './Card'
import About from './Conditional';
import {FaConnectdevelop} from 'react-icons/fa';
import {GiMaterialsScience} from 'react-icons/gi';
import {FcBusiness} from 'react-icons/fc';

function App() {
  const Cards=[
    {
    icon:<FaConnectdevelop size="100px" background-color="green"/>,
    heading:'Design & Development',
    content:'A curated set of   ES5/ES6/TypeScript wrappers for plugins to easily add any native functionality to your Ionic apps'
    },
    {
    icon:<GiMaterialsScience size="100px"/>,
    heading:'Science & Technology',
    content:'A curated set of   ES5/ES6/TypeScript wrappers for plugins to easily add any native functionality to your Ionic apps'
    },
    {
    icon:<FcBusiness size="100px"/>,
    heading:'Business Development',
    content:'A curated set of   ES5/ES6/TypeScript wrappers for plugins to easily add any native functionality to your Ionic apps'
    },

  ];
  const [visible,setVisible]=useState("4");

  const showLess=()=>{
    console.log("button clicked");
    setVisible((value)=>value-1);
  }
  const showMore=()=>{
    console.log("button clicked");
    setVisible((value)=>value+1);
  }
  if(visible<3)
{
  return (
    
    
    <div>
    <h1 className="col-md-8 offset-md-3 mt-0">Browse Jobs By Category</h1>
      {Cards.slice(0,visible).map((res,i)=>{
      return <Card data={res}/>
})}
 <div style={{ display: 'flex', justifyContent: 'center',marginTop:25 }}>
   {/* <button onClick={showMore}>Hide Categories</button> */}
   <button onClick={showMore}>See All Categories</button>
  </div>
</div>
  );
}
else
return(
<div>
<h1 className="col-md-8 offset-md-3 mt-0">Browse Jobs By Category</h1>
      {Cards.slice(0,visible).map((res,i)=>{
      return <Card data={res}/>
})}
 <div style={{ display: 'flex', justifyContent: 'center',marginTop:25 }}>
   <button onClick={showLess}>Hide Categories</button>
   {/* <button onClick={showLess}>See All Categories</button> */}

  </div>
</div>
);

}

export default App;
