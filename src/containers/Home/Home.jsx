// import Cars from '../Cars/Cars'
import classes from './Home.module.scss'

const Home = props => {
  return (
    <div className={classes.Home}>
      <h2 className={classes.Title}>New Cars</h2>
      {/* <Cars /> */}
    </div>
  )
}

export default Home