import './App.css';

import {AgGridReact} from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { useEffect, useState } from 'react';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function rankings() {
  const [rowData, setRowData] = useState([]);

  const columns = [
    { field: "rank", sortable: true, filter: true },
    { field: "country", sortable: true, filter: true },
    { field: "score", sortable: true, filter: true },
    { field: "year", sortable: true, filter: true }
  ];

  useEffect(() => {
    fetch("http://131.181.190.87:3000/rankings")
    .then(res => res.json())
    .then(data => 
      data.map(
        data => {
          return {
            rank: data.rank,
            country: data.country,
            score: data.score,
            year: data.year
          }
        }
      ))
      .then(data => setRowData(data));
  });

  return (
    <div className="container">
      <div 
        className="ag-theme-balham" 
        style={{
          height: "600px",
          width: "800px",
        }}
      >
        <AgGridReact
          columnDefs={columns}
          rowData={rowData}
          pagination={true}
          paginationPageSize={19}
        />
      </div>
    </div>
  );
}

export default rankings;
