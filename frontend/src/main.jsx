import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import Store from './redux/store/store.js'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'




const storePersister =persistStore(Store)
ReactDOM.createRoot(document.getElementById('root')).render(
    <PersistGate persistor={storePersister} >
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </Provider>
  </PersistGate>
)
