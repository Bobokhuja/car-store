import classes from './MenuList.module.scss'
import { LinkContext } from '../../Header/Header'
import MenuItem from './MenuItem/MenuItem'

const MenuList = props => {
  
  return (
    <ul className={classes.MenuList}>
      <LinkContext.Consumer>
        {links => {
          return links.map(({address, name}, index) => (
              <MenuItem key={index} link={address}>
                {name}
              </MenuItem>
            )
          )
        }}
      </LinkContext.Consumer>
    </ul>
  )
}

export default MenuList