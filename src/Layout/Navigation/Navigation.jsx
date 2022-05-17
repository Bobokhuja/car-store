import MenuList from './MenuList/MenuList'
import classes from './Navigation.module.scss'

const Navigation = props => {

  return (
    <nav className={classes.Menu}>
      <MenuList />
    </nav>
  )
}

export default Navigation