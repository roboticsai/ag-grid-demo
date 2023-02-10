export default function Filter({visibility}) {
    console.log('filter',visibility)
    return (
    <div className={`${visibility} p-4 rounded-lg bg-gray-50 dark:bg-gray-800`} aria-labelledby="dashboard-tab">
        <input type="search" className='m-1' placeholder="Search..." required/>
      </div>
    )
}