import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Homepage from './components/Homepage'
import Layout from './components/Layout'


// SHIFT ALT O um alle nicht genutzten importe zu löschen


// 1. npm install react-router-dom
// 2. 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Layout >
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about_me" element={<About />} />

    </Routes>
    </Layout>
    </BrowserRouter>
    <div className="App">
  
    </div>
    </>
  )
}

export default App
