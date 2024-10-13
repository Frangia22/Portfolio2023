import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Home } from './views/Home'
import { About } from './views/About'

function App() {
  return (
    <main className='bg-primary/95 min-h-screen'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
