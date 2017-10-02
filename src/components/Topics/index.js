import React from 'react'
import { Link } from 'react-router-dom'
import Api from '../../utils/Api'

import Form from './Form'

class Topics extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    console.log('load topics')
    Api('GET', '/topics', {})
      .then(results => {
        const { topics } = results
        console.log(topics)
      })
      .catch(error => {
        console.error(error)
      })
  }

  render () {
    console.log('RENDER TOPICS')
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
}

export default Topics
