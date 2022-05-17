import classes from './Footer.module.scss'

const Footer = props => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.FooterWrapper}>
        <p>Copyright Car Store &copy; 2022</p>
        <p>Developer <a href='https://github.com/Bobokhuja'>Bobokhuja</a></p>
      </div>
    </footer>
  )
}

export default Footer;