import React, { useCallback, useMemo, useRef, useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

// import styles from '@/styles/Home.module.css'
import GridPopupMenu from '../components/gridPopupMenu/gridPopupMenu'
import Action from '../components/Action'

export default function Home() {
  const gridRef = useRef()
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { 
      field: 'athlete', sortable: true, headerComponent: GridPopupMenu, 
      checkboxSelection: true,
    },
    { field: 'age' },
    { field: 'country', },
    { field: 'year', },
    { field: 'date' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
    { field: 'Action', cellRenderer: Action, pinned: 'right', lockPinned: true, cellClass: 'lock-pinned', }
  ]);
  
  const defaultColDef = useMemo(() => {
    return {
      sortable: true,
      filter: true,
      resizable: true,
    };
  }, []);

  const onGridReady = useCallback((params) => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json()) 
      .then((data) => setRowData(data));
  }, []);

  const autoGroupColumnDef = useMemo(() => {
    return {
      minWidth: 200,
    };
  }, []);

  return (
    <>  
      <div style={{height: 600, width: '100%'}} className="ag-theme-alpine static">
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          // autoGroupColumnDef={autoGroupColumnDef}
          animateRows={true}
          onGridReady={onGridReady}
        ></AgGridReact>
      </div>
    </>
  )
}
``