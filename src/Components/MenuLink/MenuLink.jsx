import React from 'react'
import './MenuLink.css'
import { Link } from 'react-router-dom';

function MenuLink(props) {
  return (
    <div>
          <Link to={props.url} className='link'>{props.linkname}</Link>
          
    </div>
  )
}

export default MenuLink
