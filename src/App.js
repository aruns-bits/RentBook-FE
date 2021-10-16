import Layout from "../src/components/Layout"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Books  from "./pages/Books"
import "./App.css"

function App() {
  return (
    <Layout>
      <NavBar />
      <Books />
      <Footer />
    </Layout>
  )
}

export default App
