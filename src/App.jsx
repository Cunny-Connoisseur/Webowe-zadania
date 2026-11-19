import { events } from './data/events'

export default function App() {
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
