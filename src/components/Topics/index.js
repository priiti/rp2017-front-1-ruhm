import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import Api from './../../utils/api'
import Form from './Form'
import List from './List'

class Topics extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topics: []
    }
  }

  componentDidMount () {
    Api('GET', '/topics', {})
      .then((results) => {
        const { topics } = results
        this.setState({ topics })
      })
      .catch((error) => {
=======
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
>>>>>>> 7a7cd674ce4901d8c762658af656514760264078
        console.error(error)
      })
  }

  render () {
<<<<<<< HEAD
    return (
      <div id="topics">
        <h1>Topics</h1>
        <Link to='/'>Home</Link>
        <br/>
        <Form />
        <List topics={this.state.topics}/>
=======
    console.log('RENDER TOPICS')
    return (
      <div id='topics'>
        <h1>Topics</h1>
        <Link to='/'>Home</Link>
        <br />
        <br />
        <Form />
>>>>>>> 7a7cd674ce4901d8c762658af656514760264078
      </div>
    )
  }
}

export default Topics
