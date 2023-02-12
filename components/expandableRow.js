
export default function ExpandableRow({id}) {
    const tableItems = columns.map(column =>
    <li key={column.colId}>
        <input onChange={(e) => setActiveColumns(column.colId, e.target.checked)} type="checkbox" defaultChecked={column.visible} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{column.colId}</label>
    </li>;
    return (
        <form className='visible h-1/2 items-center mb-4 bg-white border border-black-100'>
            <ul className="overflow-auto py-2 text-sm text-gray-700 dark:text-gray-200 p-1">{tableItems}</ul>
        </form>
    )
}