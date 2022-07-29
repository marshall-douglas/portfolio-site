import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/layout'
//import Portfolio from './components/Portfolio'
//import Dashboard from './components/Dashboard'
import './App.scss'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route exact path="/" index element={<Home />} />
          <Route exact path="about" index element={<About />} />
          <Route exact path="contact" index element={<Contact />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App