import React, { useState } from "react";
// import JSX from "./Basic/JSX";
// import Class_Component from "./Basic/Class_Component";
// import { Functional } from "./Basic/Functional";
// import Counter from "./Basic/Counter";
// import Props from "./Basic/Props";
// import State from "./Basic/State";
// import UseEffect from "./Basic/UseEffect";
// import Fetch_data from "./Basic/Fetch_data";
// import IndianGov from "./Intermediate/props_drilling/IndianGov"

// import Hello from "./context/HOC/Hello";
// import WithLogger from "./context/HOC/WithLogger";

// const HelloWithLogger = WithLogger(Hello);
// import UseMemo from "./Intermediate/UseMemo";
// import UseCallback from "./Intermediate/UseCallback";
// import UseRef from "./Intermediate/UseRef";
// import { Control_UnControl } from "./Intermediate/Control_UnControl";

// import PureComp from './Intermediate/PureComp'

import Modal from "./Advanced/Modal";


import { lazy,Suspense } from "react";
import {BrowserRouter as Router , Routes, Route, Link} from 'react-router-dom'


const LazyComponent = lazy(()=>import('./Advanced/LazyComponent'))

const Home = lazy(()=>import('./Advanced/Home'));
const About = lazy(()=>import('./Advanced/About'));

import React_Memo from "./Advanced/React_Memo";
import Form from "./Advanced/Form";

const App = () => {
  // const [showModal, setShowModal] = useState(false)
  return (
    <Router>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
      </nav>
      {/* 1.) Basic Level:  */}
      {/* <div> */}
      {/* <JSX /> */}
      {/* <Class_Component name="superman" age={6000} />
      <Functional name="suman" /> */}
      {/* <Counter /> */}
      {/* <Props name="suman" age="200" pincode={496440} />
      <Props name="superman" age="20" pincode={696440} />
      <Props name="spiderman" age="2900" pincode={4964430} /> */}
      {/* <State /> */}
      {/* <UseEffect /> */}
      {/* <Fetch_data /> */}
      {/* </div> */}

      {/* 2.) Intermediate Level: */}
      {/* <div> */}
      {/* <h1>This is Intermediate level</h1> */}
      {/* <div>
        <h1>This brand new div</h1>
      </div>
      <h1>Hii</h1> */}

      {/* <IndianGov /> */}
      {/* <HelloWithLogger name="Web Dev Mastery" income={10000000} /> */}
      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
      {/* <UseRef /> */}
      {/* <Control_UnControl /> */}
      {/* <PureComp /> */}
      {/* </div> */}

      {/* 3.) Advanced Level: */}
      {/* <div> */}
      {/* <div>
            <h1>React Portal Example</h1>
            <button onClick={()=>setShowModal(true)}>Open Modal</button>

            {showModal && <Modal onClose={()=>setShowModal(false)} />}
          </div> */}

      {/* <div>
            <h1>Main App component</h1>
            <Suspense fallback={<div>Loading ho rha hai...</div>}>
              <LazyComponent />
            </Suspense>
          </div> */}
      {/* </div> */}

      <Suspense fallback={<div>Loading ho rha hai...</div>}>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
