import React from 'react'
import { render } from 'react-dom'
import { Route, Switch, BrowserRouter, browserHistory } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

import Home from './components/Home'
import Topics from './components/Topics'
import NotFound from './components/NotFound'
import Navigation from './components/Navigation'
import store from './store'

import './app.scss'

render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
        <Layout>
          <Navigation />
          <Content>
            <div className='content-wrapper'>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/topics' component={Topics} />
                  <Route component={NotFound} />
                </Switch>
            </div>
          </Content>
        </Layout>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#main')
)
