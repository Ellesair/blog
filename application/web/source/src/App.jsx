import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Router from "./app/Router";
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Router />  
      </BrowserRouter>
    </div>
  );
}

export default App;
