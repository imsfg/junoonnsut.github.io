import React from 'react'

function Todo({name, description, icon}) {
  return (
    <div>
        <h2>{name}</h2>
        <p>{description}</p>
        {icon}
    </div>
  )
}

export default Todo