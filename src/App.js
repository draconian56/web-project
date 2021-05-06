import './App.css';

import {AgGridReact} from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { useEffect, useState } from 'react';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import rankings from "/screens/rankings";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/screens/rankings">Rankings</Link>
          </li>
        </ul>
      </div>
    </Router>
  );
}

export default App;
