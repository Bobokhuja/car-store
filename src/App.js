import React, {Component} from 'react'
import Home from './containers/Home/Home'
import Footer from './Layout/Footer/Footer'
import Header from './Layout/Header/Header'
import Main from './Layout/Main/Main'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main>
          <Home />
        </Main>
        <Footer />
      </>
    )
  }
}

export default App