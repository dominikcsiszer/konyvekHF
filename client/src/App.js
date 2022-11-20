import './App.css';


import Nav from './containers/Nav'

import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Book from './pages/Book'
import NewBook from './pages/NewBook'
import Admin from './pages/Admin'

function App() {
  
  return ( <div className="container">
            <Nav />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/admin' element={<Admin />} />
              <Route path='/book/:id' element={<Book />} />
              <Route path='/book/new' element={<NewBook />} />
            </Routes>
          </div>
  )
}

export default App;
