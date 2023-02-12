import React, { useCallback, useMemo, useRef, useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

// import styles from '@/styles/Home.module.css'
import GridPopupMenu from '../components/gridPopupMenu/gridPopupMenu'
import ActionHeaderGroup from '../components/ActionHeaderGroup';

export default function Home() {
  const gridRef = useRef()
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    {
      field: 'Group',
      headerComponent: ActionHeaderGroup,
    },
    { 
      headerComponent: GridPopupMenu, 
      field: 'athlete', 
      sortable: true, 
      checkboxSelection: true,
      suppressMenu: false
    },
    { field: 'age' },
    { field: 'country', rowGroup: true, hide: true },
    { field: 'year', rowGroup: true, hide: true },
    { field: 'date' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
    { field: 'Action', pinned: 'right', lockPinned: true, cellClass: 'lock-pinned', }
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

  // display each row grouping in group rows
  const groupDisplayType = 'groupRows';

  return (
    <>  
      <div style={{height: 600, width: '100%'}} className="ag-theme-alpine static">
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          groupDisplayType={groupDisplayType}
          // autoGroupColumnDef={autoGroupColumnDef}
          animateRows={true}
          onGridReady={onGridReady}
        ></AgGridReact>
      </div>
    </>
  )
}
``