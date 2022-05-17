import classes from './Car.module.scss'

const Car = props => {
  return (
    <div className={classes.Car}>
      <h2 className={classes.Title}>{props.name}</h2>
      <p>
        <strong>Year: </strong>{props.year}
      </p>
      <div className={classes.CarDescription}>
        {props.children}
      </div>
      <footer className={classes.Footer}>
        <button className={classes.Button}>Show more</button>
        <time className={classes.Time} datatime={props.date}>{props.date.split('-').reverse().join('.')}</time>
      </footer>
    </div>
  )
}

export default Car