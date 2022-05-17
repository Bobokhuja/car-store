import classes from './Main.module.scss'

const Main = props => (
  <main className={classes.Main}>
  <h1>{props.title}</h1>
    {props.children}
  </main>
)

export default Main