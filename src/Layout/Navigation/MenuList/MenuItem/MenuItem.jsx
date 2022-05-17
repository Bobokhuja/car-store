import classes from './MenuItem.module.scss'
import {NavLink} from 'react-router-dom'

const MenuItem = props => (
  <NavLink to={props.link} className={classes.MenuItem}>
    {props.children}
  </NavLink>
)

export default MenuItem