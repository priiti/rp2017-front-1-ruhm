import React from 'react'
<<<<<<< HEAD
import Api from '../../utils/api'
=======
import Api from '../../utils/Api'
>>>>>>> 7a7cd674ce4901d8c762658af656514760264078

class Form extends React.Component {
  constructor (props) {
    super(props)
<<<<<<< HEAD
    this.state = {}
=======

    this.state = {}

>>>>>>> 7a7cd674ce4901d8c762658af656514760264078
    this.saveTopic = this.saveTopic.bind(this)
  }

  saveTopic (event) {
    event.preventDefault()

    const name = document.querySelector('input#name').value

    Api('POST', '/topics', {
      data: { name }
    })
<<<<<<< HEAD
    .then((results) => {
      const { topic } = results
      const msg = `Successfully saved topic ${topic.name}`
      this.setState({
        msg,
        error: false
      })
    })
    .catch((error) => {
      this.setState({
        msg: false,
        error: error.data.errors[0].msg
      })
    })
=======
      .then(results => {
        console.log(results)
        const { topic } = results
        const msg = 'Successfully saved topic ' + topic.name
        this.setState({
          msg,
          error: false
        })
      })
      .catch(error => {
        console.error(error)
        this.setState({
          msg: false,
          error: error.data.errors[0].msg
        })
      })
>>>>>>> 7a7cd674ce4901d8c762658af656514760264078
  }

  render () {
    const { msg, error } = this.state
<<<<<<< HEAD

=======
    console.log('RENDER')
>>>>>>> 7a7cd674ce4901d8c762658af656514760264078
    return (
      <div>
        <p>{ msg || error }</p>
        <form onSubmit={this.saveTopic}>
<<<<<<< HEAD
          <input id='name' type='text' placeholder='Enter topic name'/>
=======
          <input id='name' type='text' />
>>>>>>> 7a7cd674ce4901d8c762658af656514760264078
          <input type='submit' value='save' />
        </form>
      </div>
    )
  }
}

<<<<<<< HEAD
export default Form
=======
export default Form
>>>>>>> 7a7cd674ce4901d8c762658af656514760264078
