import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Home } from './views/Home'
import { SwitchTheme } from './components/Switch/SwitchTheme'
import { ButtonToTop } from './components/Buttons/ButtonToTop'

function App() {
  return (
    <main className='dark:bg-[#131C24] bg-[#F5F7FA] min-h-screen'>
      <Router>
        <SwitchTheme />
        <Navbar />
        <ButtonToTop />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
