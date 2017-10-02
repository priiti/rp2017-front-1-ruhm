import React from 'react'
import { Link } from 'react-router-dom'

import Form from './Form'

const Topics = () => {
  return (
    <div id='topics'>
      <h1>Topics</h1>
      <Link to='/'>Home</Link>
      <br />
      <br />
      <Form />
    </div>
  )
}

export default Topics
