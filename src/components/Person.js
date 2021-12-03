import React from 'react'

function Person({person}) {
  return (
    <div>
      <h2>{person.firstname} {person.lastname} is {person.username} , email {person.email}</h2>
    </div>
  )
}

export default Person
