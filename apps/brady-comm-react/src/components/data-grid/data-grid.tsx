
import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { render } from 'react-dom';
import styles from './data-grid.module.css';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css'; 

/* eslint-disable-next-line */
export interface DataGridProps {
}

const DataGrid = (props: DataGridProps) => {

  const [rowData, setRowData] = useState([
    {make: "Toyota", model: "Celica", price: 35000},
    {make: "Ford", model: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxster", price: 72000}
]);

const [columnDefs, setColumnDefs] = useState([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
]);

const defaultColDef = useMemo( () => ({
  sortable: true,
  filter: true,
}), []);

useEffect(() => {
  fetch('https://www.ag-grid.com/example-assets/row-data.json')
   .then(result => result.json())
   .then(rowData => setRowData(rowData))
}, [])

return (
    <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
        <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef= {defaultColDef}
            animateRows={true}
            rowSelection='multiple'>
        </AgGridReact>
    </div>
);
};

export default DataGrid;
