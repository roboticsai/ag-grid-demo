import { useCallback } from "react"

export default function Filter({visibility, filterText}) {

  return (
  <form className={`${visibility} flex-wrap `} onSubmit={(e) => filterText(e.target.input.value)} >   
    <input id='input' className="rounded border border-black-600 m-1 p-1" type="search" placeholder="Search...">
    </input>
  </form>
  )
}