import { useCallback } from "react"


export default function ActionHeaderGroup(props) {
    const downloadCsv = useCallback(() => {
        props.api.exportDataAsCsv()        
    })

    const downloadExcel = useCallback(() => {
        props.api.exportDataAsExcel()
    })

    return (
    <div className="flex flex-wrap">
        <button onClick={() => downloadCsv()} className="m-1 rounded border border-black bg-blue-500">Export as CSV</button>
        <button onClick={() => downloadExcel()} className="m-1 rounded border border-black bg-blue-500">Export as Excel</button>

    </div>
    )
}