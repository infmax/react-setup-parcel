import { LaptopOutlined, UserOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import * as React from 'react'

import routes from '../../Routes'

const { SubMenu } = Menu

const MenuBlock = () => (
  <Menu
    mode='inline'
    defaultSelectedKeys={['main']}
    // defaultOpenKeys={['sub1']}
    style={{ height: '100%', borderRight: 0 }}
  >
    {routes.map(r => (
      <Menu.Item key={r.key}>{r.label}</Menu.Item>
    ))}
    {/* <Menu.Item key='12'>option1</Menu.Item> */}
    {/* <SubMenu */}
    {/*  key='sub1' icon={<UserOutlined />} */}
    {/*  title='subnav 1' */}
    {/* > */}
    {/*  <Menu.Item key='1'>option1</Menu.Item> */}
    {/*  <Menu.Item key='2'>option2</Menu.Item> */}
    {/*  <Menu.Item key='3'>option3</Menu.Item> */}
    {/*  <Menu.Item key='4'>option4</Menu.Item> */}
    {/* </SubMenu> */}
    {/* <SubMenu */}
    {/*  key='sub2' icon={<LaptopOutlined />} */}
    {/*  title='subnav 2' */}
    {/* > */}
    {/*  <Menu.Item key='5'>option5</Menu.Item> */}
    {/*  <Menu.Item key='6'>option6</Menu.Item> */}
    {/*  <Menu.Item key='7'>option7</Menu.Item> */}
    {/*  <Menu.Item key='8'>option8</Menu.Item> */}
    {/* </SubMenu> */}
  </Menu>
)

export default MenuBlock
