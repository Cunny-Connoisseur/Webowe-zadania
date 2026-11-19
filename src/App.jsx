import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { events } from './data/events'

function EventsPage() {
  return (
    <div className="container mt-4">
      <h1>Wydarzenia i koncerty</h1>

      <div className="row g-3">
        {events.map(event => (
          <div className="col-12 col-md-4" key={event.id}>
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title h5">{event.name}</h3>
                <p className="text-body-secondary mb-2">{event.city} — {event.date}</p>
                <Link to={`/wydarzenie/${event.id}`} className="btn btn-outline-primary btn-sm">Szczegóły</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function EventPage() {
  const navigate = useNavigate()
  const {id} = useParams()
  const eventId = Number(id)
  const event = events.find(event => event.id === eventId)

  if(!event) {
    return (
      <div className="container mt-4">
        <div className="alert alert-warning">
          Nie znaleziono wydarzenia o numerze {id}
        </div>
        <button type="button" className="btn btn-outline-secondary" onClick={() => navigate(-1)}>Wstecz</button>
      </div>
    )
  }

  const priceLabel = event.price === 0 ? 'Wstęp wolny' : `${event.price} zł`

  return (
    <div className="container mt-4">
      <h1>{event.name}</h1>
      <p>Miasto: {event.city}</p>
      <p>Data: {event.date}</p>
      <p>Cena: {priceLabel}</p>
      <button type="button" className="btn btn-outline-secondary" onClick={() => navigate(-1)}>Wstecz</button>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/wydarzenie/:id" element={<EventPage />} />
      <Route path="/" element={<EventsPage />} />
    </Routes>
  )
}
