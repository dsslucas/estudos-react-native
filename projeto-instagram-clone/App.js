import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Navigator from './src/Navigator'
import storeConfig from './src/store/storeConfig'
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import axios from 'axios'

// Chama o Redux
const store = storeConfig()

// URL base do Axios
axios.defaults.baseURL = 'https://instagram-clone-8684b-default-rtdb.firebaseio.com/'

const Redux = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  )
}

registerRootComponent(Redux);