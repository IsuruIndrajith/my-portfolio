import React from 'react'
import './MenuLink.css'

function MenuLink(props) {
  return (
    <div>
          <a href={props.url} className='link'>{props.linkname}</a>
    </div>
  )
}

export default MenuLink
