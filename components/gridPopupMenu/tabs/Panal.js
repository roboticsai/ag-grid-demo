import { useState } from "react"
import { ChevronRightIcon } from '@heroicons/react/24/solid'

export default function Panal({visibility, pinColumn}) {
  const [showPinSubmenu, setShowPinSubMenu] = useState('hidden')

    return (
      <>
        <div className={`${visibility} absolute flex flex-row p-4 rounded-lg bg-gray-50 dark:bg-gray-800`}
          onMouseOver={() => setShowPinSubMenu('visible')} 
          onMouseOut={() => setShowPinSubMenu('hidden')}>
          <div className="text-sm">Pin Column</div>
          <ChevronRightIcon className='w-4 h-4'/>
          <div className={`${showPinSubmenu} absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
              onMouseOver={() => setShowPinSubMenu('visible')}
              onMouseOut={() => setShowPinSubMenu('hidden')}
            >
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                <button name='null' onClick={(e) => pinColumn(e.target.name)} 
                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >Remove Pins</button>
                </li>
                <li>
                <button name='left' onClick={(e) => pinColumn(e.target.name)} 
                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >Pin Left</button>            </li>
                <li>
                <button name='right' onClick={(e) => pinColumn(e.target.name)} 
                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >Pin Right</button>            </li>
              </ul>
            </div>
        </div>

      </>
    )
}