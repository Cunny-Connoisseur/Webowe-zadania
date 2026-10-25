import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import PhotosPage from './pages/PhotosPage'
import PhotoPage from './pages/PhotoPage'
import AddPage from './pages/AddPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {

  return (<>
    <Routes>
      <Route element={
        <Layout />
      }>
        <Route path='/' element={<PhotosPage />} />
        
        <Route path='photo/:id' element={<PhotoPage />} />
        
        <Route path='/add' element={<AddPage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  </>)
}
