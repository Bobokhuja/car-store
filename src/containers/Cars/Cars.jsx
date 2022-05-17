import React, {Component} from 'react'
import classes from './Car.module.scss'
import Car from './Car/Car'
class Cars extends Component {

  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Ferrari', year: 2016},
      {name: 'Porsche', year: 2014},
    ]
  }

  ele = this.state.cars.map((car, index) => (
    <Car name={car.name} key={index} />
  ))

  render() {
    return (
    <>
    <h1>{this.props.title}</h1>
      {this.ele}
    </>
    )
  }
}

export default Cars