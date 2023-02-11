export default function Filter({visibility}) {
  return (
  <form className={visibility}>   
    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <input className="relative block w-full p-4 m-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      </input>
    </form>
  )
}