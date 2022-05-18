import classes from './Button.module.scss'

const Button = props => {

  const cls = [
    classes.Button,
    classes[props.type]
  ]


  return (
  <button 
    className={cls.join(' ')}
  >
    {props.children}
  </button>
  )
}

export default Button