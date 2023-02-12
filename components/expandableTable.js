import { useState } from "react";
import { ChevronRightIcon } from '@heroicons/react/24/solid'

import ExpandableRow from "./expandableRow";

export default function ExpandableTable() {
    const [expand, setExpand] = useState(false)

    const tableItems = rows.map(createRow)
    return (
        <form className='visible h-1/2 items-center mb-4 bg-white border border-black-100'>
            <ul className="overflow-auto py-2 text-sm text-gray-700 dark:text-gray-200 p-1">{tableItems}</ul>
        </form>
    )
}