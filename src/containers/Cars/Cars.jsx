// import Cars from '../Cars/Cars'
import classes from './Cars.module.scss'
import CarList from '../../components/CarList/CarList'
import { Component } from 'react'

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

  render() {
    return (
      <div className={classes.Home}>
        <CarList count={this.state.cars.length} cars={this.state.cars} />
      </div>
    )
  }
}

export default Cars