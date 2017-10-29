import React from 'react'
import { Form, Icon, Input, Button, Alert } from 'antd'
const FormItem = Form.Item

class TopicsForm extends React.Component {
  constructor (props) {
    super(props)

    this.formSubmit = this.formSubmit.bind(this)
  }

  formSubmit (event) {
    event.preventDefault()
    const name = document.querySelector('input#name').value
    this.props.saveTopic(name)
  }

  render () {
    const { save: { msg, error, loading } } = this.props.topics
    const errorMessage = error ? error.data.message || error.data.errors[0].msg : null

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
      },
      wrapperCol: {
        xs: { span: 24 },
      },
    };

    return (
      // <div>
      //   <p>{ msg || errorMessage }</p>
      //   <form onSubmit={ this.formSubmit }>
      //     <input id='name' type='text' />
      //     <input disabled={ loading } type='submit' value='save' />
      //   </form>
      // </div>
      <div>
        <Form onSubmit={ this.formSubmit }>
          <FormItem
            {...formItemLayout}
            label="Topic"
          >
            <Input id="name" />
          </FormItem>
          <Button type="primary" htmlType="submit">
            Add topic
          </Button>
        </Form>
      </div>
    )
  }
}

export default TopicsForm
