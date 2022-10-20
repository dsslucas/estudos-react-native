import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Navigator from './src/Navigator'
import storeConfig from './src/store/storeConfig'
import registerRootComponent from 'expo/build/launch/registerRootComponent';

// Chama o Redux
const store = storeConfig()

const Redux = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  )
}

registerRootComponent(Redux);