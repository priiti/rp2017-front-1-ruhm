import React from 'react'
import { Link } from 'react-router-dom'
import List from './List'
import TopicsForm from './TopicsForm'
import CurriculumsForm from './CurriculumsForm'

import { Button } from 'antd'

class Topics extends React.Component {
  componentDidMount () {
    this.props.getTopics()
  } 

  render () {
    const { topics } = this.props

    return (
      <div id="topics">
        <h1>Topics</h1>
        <Link to='/'><Button>Home</Button></Link>
        <br/>
        <br/>
        <TopicsForm {...this.props}/>
        <CurriculumsForm />
        <br/>
        <br/>
        <List topics={ topics.data }/>
      </div>
    )
  }
}

export default Topics
