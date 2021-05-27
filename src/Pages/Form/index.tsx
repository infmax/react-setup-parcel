import {
  Button, Form, Input, Select
} from 'antd'
import * as React from 'react'
import { useHistory } from 'react-router'

import { useStore } from '../../stores/stores'

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
}

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
}

const FormBlock = () => {
  const store = useStore('registryStore')

  const { append } = store

  const [form] = Form.useForm()
  const history = useHistory()

  const onFinish = (values: any) => {
    append(values)
    history.push('/registry')
  }

  return (
    <Form
      {...layout} form={form}
      name='control-hooks' onFinish={onFinish}
    >
      <Form.Item
        name='id'
        label='id'
        rules={[
          {
            required: true
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name='name'
        label='name'
        rules={[
          {
            required: true
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default FormBlock
