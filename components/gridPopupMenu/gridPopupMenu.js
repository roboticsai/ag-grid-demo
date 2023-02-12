import { useState, useRef, useCallback, useEffect } from 'react';
import { ColumnState } from 'ag-grid-community';
import React from 'react';
import Tippy from '@tippyjs/react';
import Tabs from './Tabs'
import { Bars3Icon, BeakerIcon } from '@heroicons/react/24/solid'

const GridPopupMenu = (props) => {
  const tippyRef = useRef();
  const [visible, setVisible] = useState(false);
  const [menuVisibility, setMenuVisibility] = useState('hidden')

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  // useEffect (() => {
  //   props.api.addGlobalListener(function(type, event) {
  //     if (type.indexOf("column") >= 0) {
  //         console.log("Got column event: ", event);
  //     }
  // });
  // })

  const pinColumn = useCallback((pose) => {
    if(pose!='null') {
      props.columnApi.applyColumnState({
        state: [{ colId: 'athlete', pinned: pose, lockPinned: true, cellClass: 'lock-pinned', }],
        defaultState: { pinned: null },
      });
    }
    else {
      props.columnApi.applyColumnState({
        state: [
          { colId: 'athlete', pinned: 'left' },
          { colId: 'age', pinned: 'left' },
          { colId: 'country', pinned: 'left' },
          { colId: 'year', pinned: 'right' },
          { colId: 'date', pinned: 'left' },
          { colId: 'sport', pinned: 'left' },
          { colId: 'gold', pinned: 'left' },
          { colId: 'silver', pinned: 'right' },
          { colId: 'bronze', pinned: 'left' },
          { colId: 'total', pinned: 'right' },
        ],
        defaultState: { pinned: null },
      });
    }
  })

  const setActiveColumns = useCallback((id, state) => {
    props.columnApi.setColumnVisible(id, state);
  }, [])

  const filterText = useCallback((text) => {
    props.api.setFilterModel({
      athlete: { type: 'startsWith', filter: text },
    });
  }, [])

  const exportToCsv = useCallback(() => {
    props.api.exportDataAsCsv();
  }, [])

  return (
    <Tippy
      ref={tippyRef}
      content={<Tabs pinColumn={pinColumn} 
              filterText={filterText} 
              setActiveColumns={setActiveColumns}
              columns={props.columnApi.getColumns()}/>}
      visible={visible}
      onClickOutside={hide}
      allowHTML={true}
      arrow={false}
      appendTo={document.body}
      interactive={true}
      placement="right"
    >
    <div className='flex justify-between w-full' onMouseOver={() => setMenuVisibility('visible')} onMouseOut={() => setMenuVisibility('hidden')}>
      <div>{props.displayName}</div>
      <a onClick={visible ? hide : show} 
        href="#" className={`${menuVisibility} right-0`}>
        <Bars3Icon className="w-4 h-4"/>
      </a>
      </div>
    </Tippy>
  );
};

export default GridPopupMenu;
