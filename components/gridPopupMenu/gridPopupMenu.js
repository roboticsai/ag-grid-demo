import { useState, useRef } from 'react';
import React from 'react';
import Tippy from '@tippyjs/react';

const GridPopupMenu = (props) => {
  const tippyRef = useRef();
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const activeTabStyle = 'inline-flex p-2 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group'
  const inActiveTabStyle = 'inline-flex p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'

  const [activeTab, setActiveTab] = useState(
    {
      panal: 'visible',
      panalStyle: activeTabStyle,
      filter: 'hidden',
      filterStyle: inActiveTabStyle,
      select: 'hidden',
      selectStyle: inActiveTabStyle
    }
  )

  function tabClicked(tab) {
    if(tab=='panal') {
      setActiveTab({
        panal: 'visible',
        panalStyle: activeTabStyle,
        filter: 'hidden',
        filterStyle: inActiveTabStyle,
        select: 'hidden',
        selectStyle: inActiveTabStyle
      })
    }
    else if(tab=='filter') {
      setActiveTab({
        panal: 'hidden',
        panalStyle: inActiveTabStyle,
        filter: 'visible',
        filterStyle: activeTabStyle,
        select: 'hidden',
        selectStyle: inActiveTabStyle
      })
    }
    else if(tab=='filter') {
      setActiveTab({
        panal: 'visible',
        panalStyle: activeTabStyle,
        filter: 'hidden',
        filterStyle: inActiveTabStyle,
        select: 'hidden',
        selectStyle: inActiveTabStyle
      })
    }
  }

  const  btnStyle = 'm-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'

  const dropDownContent = (
    <>
    <div className="bg-white w-full border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li className="mr-2">
                <a onClick={() => tabClicked('panal')} href="#" className={activeTab.panalStyle}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                </a>
            </li>
            <li className="mr-2">
                <a onClick={() => tabClicked('filter')} href="#" className={activeTab.filterStyle}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                </svg>
                </a>
            </li>
            <li className="mr-2">
                <a onClick={() => tabClicked('select')} href="#" className={activeTab.selectStyle}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" />
                </svg>
                </a>
            </li>
        </ul>
    </div>
    <div className={`${activeTab.panal} p-4 rounded-lg bg-gray-50 dark:bg-gray-800`} aria-labelledby="profile-tab">
      <div className='flex flex-row'>
        <div className="text-sm">Pin Column</div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
        </svg>
      </div>
      </div>
      <div className={`${activeTab.filter} p-4 rounded-lg bg-gray-50 dark:bg-gray-800`} aria-labelledby="dashboard-tab">
        <input type="search" className='m-1' placeholder="Search..." required/>
      </div>
      <div className={`${activeTab.select} p-4 rounded-lg bg-gray-50 dark:bg-gray-800`} aria-labelledby="dashboard-tab">
          <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
      </div>
    </>

  );

  const onClickHandler = (option) => {
    hide();
    if (option === 'create') {
      props.api.applyTransaction({
        add: [{}],
      });
    }
    if (option === 'delete') {
      props.api.applyTransaction({ remove: [props.data] });
    }

    if (option === 'edit') {
      props.api.startEditingCell({
        rowIndex: props.rowIndex,
        colKey: 'make',
      });
    }
  };

  return (
    <Tippy
      ref={tippyRef}
      content={dropDownContent}
      visible={visible}
      onClickOutside={hide}
      allowHTML={true}
      arrow={false}
      appendTo={document.body}
      interactive={true}
      placement="right"
    >

      {/* <button className="btn btn-primary" onClick={visible ? hide : show}>
        Action
      </button> */}
      <a onClick={visible ? hide : show} href="#" className={activeTab.filterStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </a>
    </Tippy>
  );
};

export default GridPopupMenu;
