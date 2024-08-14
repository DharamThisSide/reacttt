import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom app!</h1>
    </div>
  )
}

// const Reactelement = {
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'click me to visit google'
// }
const anotheruser="dharam"

const anotherElement =(<a href="https://google.com" target='_blank'>Visit Google</a>)
const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visist Google',
  anotheruser
)



createRoot(document.getElementById('root')).render(
 
  reactElement
  
)
