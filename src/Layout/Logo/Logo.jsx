import classes from './Logo.module.scss'
import svgLogo from './Logo2.png'

const Logo = props => (
  <div className={classes.LogoWrapper}>
    <a href={'/'} className={classes.LogoLink}>
      <img src={svgLogo} className={classes.Logo} alt='Car Logo' />
      <span className={classes.LogoName}>Car Store</span>
    </a>
  </div>
)

export default Logo