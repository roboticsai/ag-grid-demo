import { useState } from "react"

export default function Panal({visibility, pinColumn}) {
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