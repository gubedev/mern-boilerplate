
import React, 
{ 
  Suspense, 
  lazy 
} from "react"
import { 
  BrowserRouter, 
  Route, 
  Switch 
} from "react-router-dom"

import Header from "components/Header"
import "./App.css"

const Home = lazy(() => import("containers/Home"))
const About = lazy(() => import("containers/About"))

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/about" exact>
                <About />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
