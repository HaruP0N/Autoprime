import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Home from './pages/home'
import Desarrollador from './pages/desarrollador'
import NotFound from './pages/notfound'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/desarrollador" element={
          <Desarrollador
            nombre="Leandro Torres Guerra"
            carrera="Ingeniería Civil Informática"
            ciudad="Talca"
            github="https://github.com/HaruP0N"
          />
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App