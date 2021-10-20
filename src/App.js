import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Layout from "../src/components/Layout"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Books from "./pages/Books"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import styles from "./App.module.scss"

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Layout>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/books">
              <Books />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
          <Footer />
        </Layout>
      </Router>
    </div>
  )
}

export default App
