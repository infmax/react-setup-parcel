import 'antd/dist/antd.css'

import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import * as React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import MenuBlock from './Components/Menu'
import RouteWithSubRoutes from './Components/Router/RouteWithSubRoutes'
import routes from './Routes'

const { Header, Content, Sider } = Layout

const App = () => (
  <Layout className='main-layout'>
    <Header>Demo APP</Header>

    <Layout>
      <Router>
        <Sider>
          <MenuBlock />
        </Sider>

        <Layout>
          <Content className='site-layout-background'>
            <Switch>
              {routes.map(route => (
                <RouteWithSubRoutes {...route} />
              ))}
            </Switch>
          </Content>
        </Layout>
      </Router>
    </Layout>
  </Layout>
)

export default App
