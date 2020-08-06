import {hot} from "react-hot-loader";
// import React, { Component } from "react";
import React, { useRef, useEffect } from 'react';
import "./App.scss";
import Cover from './components/Cover';

const App = () => {
  return (
    <div className="App">
      <Cover />
    </div>
  );
}

export default hot(module)(App);
