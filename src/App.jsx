import { useState } from 'react'
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { events } from './data/events'

const cities = [...new Set(events.map(event => event.city))]

function EventsPage() {
  const [activeCities, setActiveCities] = useState(cities)

  const handleToggleCity = (city) => {
    setActiveCities(current =>
      current.includes(city)
        ? current.filter(activeCity => activeCity !== city)
        : [...current, city]
    )
  }

  const visibleEvents = events.filter(event => activeCities.includes(event.city))
  const hasEvents = visibleEvents.length > 0

  return (
    <div className="container mt-4">
      <h1>Wydarzenia i koncerty</h1>

      <div className="d-flex flex-wrap gap-3 mb-3">
        {cities.map(city => {
          const inputId = `city-${city}`

          return (
            <div className="form-check form-switch" key={city}>
              <input className="form-check-input" type="checkbox" role="switch" id={inputId} checked={activeCities.includes(city)} onChange={() => handleToggleCity(city)} />
              <label className="form-check-label" htmlFor={inputId}>{city}</label>
            </div>
          )
        })}
      </div>

      {!hasEvents && (
        <div className="alert alert-secondary">Brak wydarzeń dla wybranych miast</div>
      )}

      {hasEvents && (
        <div className="row g-3">
          {visibleEvents.map(event => (
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
      )}
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

function NotFoundPage() {
  return (
    <div className="container mt-4">
      <h1>Nie ma takiej strony</h1>
      <Link to="/">Wróć do listy</Link>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/wydarzenie/:id" element={<EventPage />} />
      <Route path="/" element={<EventsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
