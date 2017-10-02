import React from 'react'
import { Link } from 'react-router-dom'
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
        console.error(error)
      })
  }

  render () {
    return (
      <div id="topics">
        <h1>Topics</h1>
        <Link to='/'>Home</Link>
        <br/>
        <Form />
        <List topics={this.state.topics}/>
      </div>
    )
  }
}

export default Topics
