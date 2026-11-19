import { useEffect, useState } from 'react'

const downloadBikes = async () => {
    const res = await fetch(import.meta.env.BASE_URL + 'rowery.json')

    if(!res.ok) throw new Error('Błąd serwera: ' + res.status)

    return res.json()
}

export default function App() {
  const [bikes, setBikes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true

    downloadBikes()
      .then(data => { if(active) setBikes(data) })
      .catch(err => { if(active) setError(err.message) })
      .finally(() => { if(active) setIsLoading(false) })

    return () => { active = false }
  }, [])

  if(isLoading) return (
    <div className="container mt-4">
      <div className="spinner-border" role="status" />
      <span className="ms-2">Ładowanie...</span>
    </div>
  )

  if(error) return (
    <div className="container mt-4">
      <div className="alert alert-danger">{error}</div>
    </div>
  )

  if(bikes.length === 0) return (
    <div className="container mt-4">
      <div className="alert alert-secondary">Brak rowerów</div>
    </div>
  )

  return (
    <div className="container mt-4">
      <h1>Wypożyczalnia rowerów</h1>

      <div className="row g-3">
        {bikes.map(bike => (
          <div key={bike.id} className="col-12 col-md-6">
            <div className={`card h-100${bike.available ? '' : ' opacity-50'}`}>
              <div className="card-body">
                <h3 className="card-title h5">{bike.model}</h3>
                <span className="badge text-bg-secondary mb-3">{bike.type}</span>
              </div>
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}
