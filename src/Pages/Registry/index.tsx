import { Table } from 'antd'
import { observer } from 'mobx-react-lite'
import * as React from 'react'
import { useEffect } from 'react'

import { useStore } from '../../stores/stores'

const Registry = observer(() => {
  const store = useStore('registryStore')

  const {
    columns, data, loading, fetchData
  } = store

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <div>Registry</div>
      <Table
        columns={columns} dataSource={data}
        loading={loading}
      />
    </div>
  )
})

export default Registry
