import React from 'react'
import Main from './Main'
import { Auth0Provider } from "@auth0/auth0-react";

const App = () => {
  return (
    <>
    <Auth0Provider
    domain="dev-rc3m7v5dh2ywu4ls.us.auth0.com"
    clientId="EYh12GGZJ6B66Wdq4F11HQ6kA2d3t8OS"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
     <Main/>
  </Auth0Provider>
    
    </>
  )
}

export default App  
