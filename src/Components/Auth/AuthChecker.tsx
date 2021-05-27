import { Skeleton } from 'antd'
import { observer } from 'mobx-react-lite'
import * as React from 'react'
import { useEffect } from 'react'

import { useStore } from '../../stores/stores'

const AuthChecker = observer(({ children }: any) => {
  const store = useStore('authStore')

  const { roles, fetchAuth } = store

  useEffect(() => {
    fetchAuth()
  }, [])

  if (!roles.length) {
    return <Skeleton active />
  }

  return children
})

export default AuthChecker
