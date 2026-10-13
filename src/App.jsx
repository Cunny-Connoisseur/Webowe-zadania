// import './App.css'
import { useRef } from "react"
import ListElement from "./components/ListElement"
import hotele from "./data/wariant06"

export default function App() {
  const nameInput = useRef(null)
  const numberInput = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()

    const name = nameInput.current.value
    const number = numberInput.current.value

    console.log(`Imię i nazwisko: ${name}`)

    const hotel = hotele[number - 1]

    if(hotel) {
      console.log(`Hotel o numerze ${number}: ${hotel}`)
    } else {
      console.error("Nieprawidłowy numer hotelu")
    }
  }
  
  return (<>
    <div className="flex-col">
      <h1>
        Liczba hoteli: {hotele.length}
      </h1>

      <ol>
        {hotele.map((hotel, key) => (
          <ListElement name={hotel} key={key} />
        ))}
      </ol>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="form-label">
          Imię i nazwisko
        </label>
        <input ref={nameInput} type="text" name="name" id="name" className="form-control" />

        <label htmlFor="number" className="form-label">
          Numer hotelu:
        </label>
        <input ref={numberInput} type="number" name="number" id="number" className="form-control" />

        <button className="btn btn-primary mt-2" type="submit">Zatwierdź wybór</button>
      </form>
    </div>
  </>)
}
