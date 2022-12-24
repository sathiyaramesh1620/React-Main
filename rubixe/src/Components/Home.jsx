import React from 'react'
import Header from '../Components/Header/Header'
import WhoWeAre from '../Components/WhoWeAre/WhoWeAre'
import History from '../Components/History/History'
import InitiativeCard from '../InitiativeCard/InitiativeCard'
import Footer from '../Components/Footer/Footer'
import Form from '../Components/Form/Form'
const Home = () => {
  return <>
    <Header />
    <WhoWeAre />
    <History />
    <InitiativeCard />
    <Form />
    <Footer />
  </>
}

export default Home