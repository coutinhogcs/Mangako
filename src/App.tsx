import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import HomePage from './screens/Home'
import About from './screens/About'
import Discord from './screens/Discord'
import Contato from './screens/Contato'
import Manga from './screens/Manga'
import NotFound from './not-found'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/discord' element={<Discord />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/manga' element={<Manga />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
