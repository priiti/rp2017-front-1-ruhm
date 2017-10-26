import React from 'react'

const List = (props) => {
  const { topics } = props

  if (!topics.length) { return null }

  const listItems = topics.map((t) => {
    return (
      <li key={t._id}>{t.name}</li>
    )
  })

  return (
    <ul>{listItems}</ul>
  )
}

export default List
