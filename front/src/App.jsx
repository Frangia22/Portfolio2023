import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'

function App() {
  return (
    <main className='bg-primary/95 min-h-screen'>
      <BrowserRouter>
        <Navbar />
        <h1 className='text-primary font-mono text-2xl'>Hello World!!</h1>
      </BrowserRouter>
    </main>
  )
}

export default App
