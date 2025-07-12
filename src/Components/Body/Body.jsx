import React from 'react'
import './Body.css'

function Body(props) {
  return (
    <div id="About">
          { props.children }
    </div>
  )
}

export default Body
