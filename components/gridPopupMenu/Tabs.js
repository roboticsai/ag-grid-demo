import { Bars3Icon, ChevronRightIcon, FunnelIcon, ViewColumnsIcon } from '@heroicons/react/24/solid'
import { useCallback, useState } from 'react'

// import Panal from './tabs/Panal'
// import Filter from './tabs/Filter'

export default function Tabs() {
  const activeTabStyle = 'inline-flex p-2 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group'
  const inActiveTabStyle = 'inline-flex p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'
  
  const [activeTab, setActiveTab] = useState(
    {
      panal: 'visible',
      panalStyle: activeTabStyle,
      filter: 'hidden',
      filterStyle: inActiveTabStyle,
      select: 'hidden',
      selectStyle: inActiveTabStyle,
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
    else if(tab=='select') {
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

  const setFilterText = useCallback((text) => {
    console.log(text)
  })

  return (
    <>
    <div className="bg-white w-full border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li className="mr-2">
                <a onClick={() => tabClicked('panal')} href="#" className={activeTab.panalStyle}>
                <Bars3Icon className='w-4 h-4'/>
                </a>
            </li>
            <li className="mr-2">
                <a onClick={() => tabClicked('filter')} href="#" className={activeTab.filterStyle}>
                  <FunnelIcon className='w-4 h-4'/>
                </a>
            </li>
            <li className="mr-2">
                <a onClick={() => tabClicked('select')} href="#" className={activeTab.selectStyle}>
                  <ViewColumnsIcon className='w-4 h-4'/>
                </a>
            </li>
        </ul>
    </div>
    <Panal visibility={activeTab.panal} pinColumn={() => setFilterText()}/>
    {/* <Filter visibility={activeTab.filter} /> */}
    </>
  )
}

function Panal({visibility, pinColumn}) {
  const [showPinSubmenu, setShowPinSubMenu] = useState('hidden')

    return (
      <>
        <div className={`${visibility} p-4 rounded-lg bg-gray-50 dark:bg-gray-800`}>
        <div className='flex flex-row' 
          onMouseOver={() => setShowPinSubMenu('visible')} 
          onMouseOut={() => setShowPinSubMenu('hidden')}>
          <div className="text-sm">Pin Column</div>
            <ChevronRightIcon className='w-4 h-4'/>
        </div>
        <div className={`${showPinSubmenu} flex flex-col subnav-content p-4 rounded-lg bg-gray-50 dark:bg-gray-800`}
        onMouseOver={() => setShowPinSubMenu('visible')}
        onMouseOut={() => setShowPinSubMenu('hidden')}
        >
          <button onClick={() => pinColumn('null')}>No Pin</button>
          <button onClick={() => pinColumn('left')}>Pin Left</button>
          <button onClick={() => pinColumn('right')}>Pin Right</button>
        </div>
      </div>
      </>
    )
}