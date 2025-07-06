import React from 'react'
import './Header.css'
import MenuLink from '../MenuLink/MenuLink'

function Header() {
  return (
    <div id="navbar">
          
          <div>
              <MenuLink linkname="Home" url="#home"/>
              <MenuLink linkname="About" url="#about"/>
              <MenuLink linkname="Projects" url="#projects" />
              <MenuLink linkname="Skills & Achievements" url="#skills" />
              <MenuLink linkname="Education" url="#education" />
              <MenuLink linkname="Experience" url="#experience" />
              <MenuLink linkname="Contacts" url="#contacts" />
          </div>
    </div>
  )
}

export default Header
