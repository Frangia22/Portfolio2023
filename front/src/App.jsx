import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Route } from 'react-router-dom'
import { Resume } from './views/Resume'
import { Routes } from 'react-router-dom'

function App() {
  return (
    <main className='bg-primary/95 min-h-screen'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' Component={Resume} /> 
        </Routes>       
      </BrowserRouter>
    </main>
  )
}

export default App
