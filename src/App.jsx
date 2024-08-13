import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import Home from './pages/Home'
import Favorites from './pages/Favorites'

function App() {


  return (
    <div className='flex'>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App
