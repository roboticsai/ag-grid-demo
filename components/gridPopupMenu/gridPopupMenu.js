import { useState, useRef, useCallback, useEffect } from 'react';
import { ColumnState } from 'ag-grid-community';
import React from 'react';
import Tippy from '@tippyjs/react';
import Tabs from './Tabs'
import { ArrowDownIcon, ArrowUpIcon, Bars3Icon, BeakerIcon } from '@heroicons/react/24/solid'

const GridPopupMenu = (props) => {
  const tippyRef = useRef();
  const [visible, setVisible] = useState(false);
  const [menuVisibility, setMenuVisibility] = useState('hidden')
  const [clickCount, setClickCount] = useState(0)
  const [upArrowVisibility, setUpArrowVisibility] = useState('hidden')
  const [downArrowVisibility, setDownArrowVisibility] = useState('hidden')

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

  const headerClicked = useCallback(() => {
    setClickCount(clickCount+1)
    if(clickCount%3 == 0) {
      setUpArrowVisibility('visible')
      setDownArrowVisibility('hidden')
    }
    else if(clickCount%3 == 1) {
      setUpArrowVisibility('hidden')
      setDownArrowVisibility('visible')
    }    
    else {
      setUpArrowVisibility('hidden')
      setDownArrowVisibility('hidden')    }
    props.progressSort(true)
  })

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
    <div onClick={() => headerClicked()} className='flex justify-between w-full' onMouseOver={() => setMenuVisibility('visible')} onMouseOut={() => setMenuVisibility('hidden')}>
      <div>{props.displayName}</div>
      <ArrowUpIcon className={`${upArrowVisibility} w-4 h-4`}/>
      <ArrowDownIcon className={`${downArrowVisibility} w-4 h-4`}/>
      <Bars3Icon onClick={visible ? hide : show} className={`${menuVisibility} w-4 h-4`}/>
    </div>
    </Tippy>
  );
};

export default GridPopupMenu;
