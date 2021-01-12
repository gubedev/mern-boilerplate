import React from "react"
import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <>
      <p>
        Welcome to MERN boilerplate
      </p>
      <NavLink to="/about" className="App-link">
        Go to About
      </NavLink>
    </>
  )
}

export default Home
