import React, {Component} from 'react'
import Home from './containers/Home/Home'
import Footer from './Layout/Footer/Footer'
import Header from './Layout/Header/Header'
import Main from './Layout/Main/Main'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cars from './containers/Cars/Cars'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home title={'New Cars'} />} />
            <Route path="/cars" element={<Cars title={'Cars list'} />} />
          </Routes>
        </Main>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App