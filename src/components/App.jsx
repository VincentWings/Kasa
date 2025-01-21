import React from 'react'

import Navbar from './Navbar'
import Banner from './Banner'
import Main from './Main'
import Grid from './Grid'
import Footer from './Footer'

function App() {
  return (
    <>
        <Navbar />
        <Banner />
        <Main>
          <Grid />
        </Main>
        <Footer />
    </>
  )
}

export default App