import { useState, useRef } from 'react';
import React from 'react';
import Tippy from '@tippyjs/react';
import Tabs from './Tabs'

const GridPopupMenu = (props) => {
  const tippyRef = useRef();
  const [visible, setVisible] = useState(false);
  const [menuVisibility, setMenuVisibility] = useState('hidden')

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const pinColumn = () => {
    console.log('column api', props.columnApi)
    props.columnApi.getPrimaryColumns()
  }

  return (
    <Tippy
      ref={tippyRef}
      content={<Tabs pinColumn={() => pinColumn()}/>}
      visible={visible}
      onClickOutside={hide}
      allowHTML={true}
      arrow={false}
      appendTo={document.body}
      interactive={true}
      placement="right"
    >
    <div className='flex w-full' onMouseOver={() => setMenuVisibility('visible')} onMouseOut={() => setMenuVisibility('hidden')}>
      <div className='object:none object-left'>{props.displayName}</div>
      <a onClick={visible ? hide : show} 
        href="#" className={`${menuVisibility} right-0`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </a>
      </div>
    </Tippy>
  );
};

export default GridPopupMenu;
