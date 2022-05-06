import './App.css'
import Navbar from './component/Navbar'
import Search from './component/Search'
import SearchItem from './component/SearchItem'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/search/:id" element={<SearchItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
