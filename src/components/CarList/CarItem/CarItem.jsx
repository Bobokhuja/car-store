import Button from '../../UI/Button'
import classes from './CarItem.module.scss'

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
        <Button type='primary'>Show more</Button>
        <time className={classes.Time} datatime={props.date}>{props.date.split('-').reverse().join('.')}</time>
      </footer>
    </div>
  )
}

export default Car