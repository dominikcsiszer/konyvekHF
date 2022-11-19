import './App.css';


import Nav from './containers/Nav'

import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Book from './pages/Book'

function App() {
  
  return ( <div className="container">
            <Nav />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/book/:id' element={<Book />} />
            </Routes>
          </div>
  )
}

export default App;
