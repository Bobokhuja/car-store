import React, {Component} from 'react'
import classes from './CarList.module.scss'
import Car from './CarItem/CarItem'
class Cars extends Component {

  getCars(count) {
    const cars = this.props.cars.concat().slice(0, count)
    const getCars = []
    for (let i = 0; i < cars.length; i++) {
      let carProps = {
        date: cars[i].date,
        name: cars[i].name,
        year: cars[i].year,
      }
      getCars.push(
        <Car date={carProps.date} name={carProps.name} year={carProps.year} key={i}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error atque laboriosam sit magni in quis. Perferendis mollitia repudiandae reiciendis fugit cum ab magni inventore velit.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, aperiam.</p>
        </Car>
      )
    }
    return getCars
  }

  render() {
    return (
      <div className={classes.Cars}>
        {
          this.getCars(2)
        }
      </div>
    )
  }
}

export default Cars