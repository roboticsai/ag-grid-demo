import { useState, useRef, useCallback } from 'react';
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

  const pinColumn = useCallback((pose) => {
    console.log('pose',pose)
    props.columnApi.applyColumnState({
      state: [{ colId: 'athlete', pinned: pose, lockPinned: true, cellClass: 'lock-pinned', }],
      defaultState: { pinned: null },
    });
  })
 
  const resetPinned = useCallback(() => {
    gridRef.current.columnApi.applyColumnState({
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
  }, []);

  return (
    <Tippy
      ref={tippyRef}
      content={<Tabs pinColumn={pinColumn}/>}
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
