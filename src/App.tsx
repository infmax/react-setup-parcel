import 'antd/dist/antd.css'

import { Layout } from 'antd'
import * as React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import MenuBlock from './Components/Menu'
import RouteWithSubRoutes from './Components/Router/RouteWithSubRoutes'
import routes from './Routes'
import { stores, StoresProvider } from './stores/stores'

const { Header, Content, Sider } = Layout

const App = () => (
  <Layout className='main-layout'>
    <Header>Demo APP</Header>

    <Layout>
      <React.Suspense fallback={<></>}>
        <StoresProvider value={stores}>
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
        </StoresProvider>
      </React.Suspense>
    </Layout>
  </Layout>
)

export default App
