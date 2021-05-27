import { Menu } from 'antd'
import * as React from 'react'
import { useHistory } from 'react-router'

import routes from '../../Routes'

const MenuBlock = () => {
  const history = useHistory()

  const currentRoute = routes.find(
    r => r.path === history.location.pathname
  )?.key

  return (
    <Menu
      mode='inline'
      defaultSelectedKeys={currentRoute ? [currentRoute] : []}
      // defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0 }}
    >
      {routes
        .filter(r => r.path)
        .map(r => (
          <Menu.Item key={r.key} onClick={() => history.push(r.path || '')}>
            {r.label}
          </Menu.Item>
        ))}
    </Menu>
  )
}

export default MenuBlock
