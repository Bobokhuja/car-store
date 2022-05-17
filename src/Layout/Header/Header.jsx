import React from 'react'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'
import classes from './Header.module.scss'

const links = [
  {address: '/', name: 'Home'},
  {address: '/cars', name: 'Cars'},
  {address: '/contacts', name: 'Contacts'},
  {address: '/about', name: 'About Us'}
]

export const LinkContext = React.createContext(links)


const Header = props => {
  return (
    <header className={classes.Header}>
      <div className={classes.HeaderWrapper}>
        <Logo />

        <LinkContext.Provider value={links}>
          <Navigation />
        </LinkContext.Provider>
      </div>
    </header>
  )
}

export default Header