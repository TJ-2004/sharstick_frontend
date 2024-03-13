import React,{useContext} from 'react'
import Header from "../components/Header"
import Buy from './Buy'
import { Context } from './Login1'


const Home = (props) => {


  return (
    <div >
      <Header />
      <div>{props.location.state.userNAme}</div>

      <Buy />
    </div>
  )
}

export default Home
