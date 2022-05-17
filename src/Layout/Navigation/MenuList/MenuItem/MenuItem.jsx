import classes from './MenuItem.module.scss'

const MenuItem = props => (
  <a href={props.link} className={classes.MenuItem}>
    {props.children}
  </a>
)

export default MenuItem