import React from 'react'
import { Table, Icon } from 'antd'
const { Column, ColumnGroup } = Table;

const List = (props) => {
  const { topics } = props

  if (!topics.length) { return null }

  // const listItems = topics.map((t) => {
  //   return <li key={t._id}>{t.name}</li>
  // })

  const listItems = topics.map((t) => {
    return {
      key: t._id,
      name: t.name,
      createdAt: t.createdAt
    }
  })

  console.log(listItems)
  return (
    // <ul>{listItems}</ul>
    <Table dataSource={listItems}>
      <Column
        title="Topic name"
        dataIndex="name"
        key="name"
      >
      </Column>
      <Column
        title="Date added"
        dataIndex="createdAt"
        key="date"
      >
      </Column>
      <Column 
        title="Action"
        key="action"
        render={() => (
          <span>
            <a href="#">Edit</a>
            <span className="ant-divider" />
            <a href="#">Delete</a>
          </span>
        )}
      />
    </Table>
  )
}

export default List
