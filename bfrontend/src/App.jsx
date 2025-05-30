import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import AddBlog from './components/AddBlog'
import BlogDash from './components/BlogDash'

function App() {

  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<h1>BLOG</h1>} />
          <Route path="/add" element={<AddBlog/>} />
          <Route path="/dashboard" element={<BlogDash/>} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes> 
      </div>
    </>
  )
}

export default App
