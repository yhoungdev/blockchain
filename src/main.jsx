import { Auth0Provider } from '@auth0/auth0-react'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <Auth0Provider
    domain="dev-7ssh-aa4.us.auth0.com"
    clientId="AfMjq2o1H91jiwBayQIEVSLxyF5Kf6yJ"
    redirectUri={window.location.origin}
  >
        <App />
      </Auth0Provider>
    </ChakraProvider>
  </React.StrictMode>
)
