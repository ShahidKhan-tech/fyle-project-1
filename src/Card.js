import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {FaConnectdevelop} from 'react-icons/fa';

import './Card.css';

function Card(props){
    console.log(props);
    return (

     <div className="container">
     <div className="row mb-2">
       <div className="col-md-4"> 
         <div className="card card-1">
         <div className="cards-1">{props.data.icon}</div>
           <h5>{props.data.heading}</h5>
           <p>A curated set of   ES5/ES6/TypeScript wrappers for plugins to easily add any native functionality to your Ionic apps.</p>
         </div>
     </div>
       <div className="col-md-4">
        <div className="card card-2">
        <div className="cards-2">{props.data.icon}</div>
          <h5>{props.data.heading}</h5>
          <p>A curated set of   ES5/ES6/TypeScript wrappers for plugins to easily add any native functionality to your Ionic apps.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card card-3">
        <div className="cards">{props.data.icon}</div>
          <h5>{props.data.heading}</h5>
          <p>A curated set of   ES5/ES6/TypeScript wrappers for plugins to easily add any native functionality to your Ionic apps.</p>
        </div>
      </div>
    </div> 
  </div>
 

    );

}

export default Card;