import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import App from './components/index'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers/index'
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)