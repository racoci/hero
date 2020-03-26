import React, { useState } from "react"

function Counter({title}) {
    const [page, setPage] = useState(1)
    return(
        <div>
            <header>Page {page} </header>
            <button onClick={() => {
                setPage(page + 1)
            }}>++</button>
        </div>
    )
}
export default Counter