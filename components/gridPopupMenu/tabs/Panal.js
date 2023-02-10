import { useState } from "react"

export default function Panal({visibility}) {
  const [showPinSubmenu, setShowPinSubMenu] = useState('hidden')

    return (
        <div className={`${visibility} p-4 rounded-lg bg-gray-50 dark:bg-gray-800`} aria-labelledby="profile-tab">
        <div className='flex flex-row' 
          onMouseOver={() => setShowPinSubMenu('visible')} 
          onMouseOut={() => setShowPinSubMenu('hidden')}>
          <div className="text-sm">Pin Column</div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
          </svg>
        </div>
        <div className={`${showPinSubmenu} subnav-content p-4 rounded-lg bg-gray-50 dark:bg-gray-800`} aria-labelledby="dashboard-tab">
          <ul>
            <button>No Pin</button>
            <button>Pin Left</button>
            <button>Pin Right</button>
          </ul>
        </div>
      </div>
    )
}