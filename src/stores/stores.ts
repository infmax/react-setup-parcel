import * as React from 'react'

import RegistryStore from './RegistryStore'

export const stores = Object.freeze({
  registryStore: new RegistryStore()
})

const storesContext = React.createContext(stores)

export const StoresProvider = storesContext.Provider

export const useStores = () => React.useContext(storesContext)

// @ts-ignore
export const useStore = (store: string) => React.useContext(storesContext)[store]
