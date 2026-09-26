// import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'

export default function App() {

  return (<>
    <Navbar name={"Galeria"} />
    <div className="container-fluid p-4">
      <Header />
    </div>
  </>)
}
