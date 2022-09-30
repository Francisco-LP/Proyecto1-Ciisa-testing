import React from 'react'

export default function Listgroup({children}) {
  return (
    <ol className="list-group list-group-numbered">
      {children}
    </ol>
  )
}

