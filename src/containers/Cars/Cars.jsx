import React, {Component} from 'react'
import classes from './Cars.module.scss'
import Car from './Car/Car'
class Cars extends Component {

  state = {
    cars: [
      {
        name: 'Ford', 
        year: 2018,
        date: '2022-17-5'
      },
      {
        name: 'Ferrari', 
        year: 2016,
        date: '2022-17-5'
      },
      {
        name: 'Porsche', 
        year: 2014,
        date: '2022-17-5'
      },
      {
        name: 'Lamborghini', 
        year: 2022,
        date: '2022-17-5'
      },
      {
        name: 'Zhiguli', 
        year: 1120,
        date: '2022-17-5'
      },
    ]
  }

  getCars(counts) {
    
  }

  elem = this.state.cars.map(({name, year, date}, index) => (
    <Car date={date} name={name} year={year} key={index}>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error atque laboriosam sit magni in quis. Perferendis mollitia repudiandae reiciendis fugit cum ab magni inventore velit.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, aperiam.</p>
    </Car>
  ))

  render() {
    this.getCars()
    return (
      <div className={classes.Cars}>
        {this.elem}
      </div>
    )
  }
}

export default Cars