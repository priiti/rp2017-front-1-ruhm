import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

class Navigation extends React.Component {
  render() {
    return (
      <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['1']}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="1"><Link to='/'>Home</Link></Menu.Item>
      <Menu.Item key="2"><Link to='/topics'>Topics</Link></Menu.Item>
    </Menu>
    )
  }
}

export default Navigation
