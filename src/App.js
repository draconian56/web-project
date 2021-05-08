import './App.css';
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { Button, ButtonGroup } from "reactstrap";
import { AgGridReact } from "ag-grid-react";
import React, { useState, useEffect } from "react";

function App() {
  const [rowData, setRowData] = useState([0]);
  const [rSelected, setrSelected] = useState([null]);

  const columns = [
    { field: "rank", sortable: true, filter: true },
    { field: "country", sortable: true, filter: true },
    { field: "score", sortable: true },
    { field: "year" }
  ];

  const [url, setUrl] = useState();

  useEffect(() => {
    fetch(url)
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
        )
      ).then(data => setRowData(data))
  }, [url]);

  return (
    <div
      className="container"
      style={{
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <h1 align="center">
        Entire Ranking
      </h1>
      <p align="center">
        This page shows every single ranking from 2015 until 2020
      </p>
      <div>
        <ButtonGroup>
          <Button onClick={() => setUrl('http://131.181.190.87:3000/rankings') + setrSelected('All')} active={rSelected === 'All'}>
            All
            </Button>
          <Button onClick={() => setUrl('http://131.181.190.87:3000/rankings?year=2015') + setrSelected(2015)} active={rSelected === '2015'}>
            2015
            </Button>
          <Button onClick={() => setUrl('http://131.181.190.87:3000/rankings?year=2016') + setrSelected(2016)} active={rSelected === '2016'}>
            2016
            </Button>
          <Button onClick={() => setUrl('http://131.181.190.87:3000/rankings?year=2017') + setrSelected(2017)} active={rSelected === '2017'}>
            2017
            </Button>
          <Button onClick={() => setUrl('http://131.181.190.87:3000/rankings?year=2018') + setrSelected(2018)} active={rSelected === '2018'}>
            2018
            </Button>
          <Button onClick={() => setUrl('http://131.181.190.87:3000/rankings?year=2019') + setrSelected(2019)} active={rSelected === '2019'}>
            2019
            </Button>
          <Button onClick={() => setUrl('http://131.181.190.87:3000/rankings?year=2020') + setrSelected(2020)} active={rSelected === '2020'}>
            2020
            </Button>
        </ButtonGroup>
        <p>Selected: {rSelected}</p>
      </div>
      <div
        className="ag-theme-balham"
        style={{
          height: "645px",
          width: "802px",
        }}
      >
        <AgGridReact
          columnDefs={columns}
          rowData={rowData}
          pagination={true}
          paginationPageSize={20}
        />
      </div>
    </div>
  );
}

export default App;
