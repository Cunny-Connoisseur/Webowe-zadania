import { initialBooks } from './data/books'

export default function App() {
  const books = initialBooks
  return (
    <div className="container mt-4">
      <h1>Katalog biblioteki</h1>

      <p className="text-body-secondary">Wyświetlono {books.length} z {books.length} książek</p>

      <div className="row g-3">
        {books.map(book => (
          <div key={book.id} className="col-12 col-md-4">
            <div className={`card h-100 ${book.available ? 'border-success' : 'border-danger'}`}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <h3 className="card-title h5">{book.title}</h3>
                </div>
                <p className="text-body-secondary mb-1">{book.author}</p>
                <span className={`badge text-bg-${book.available ? 'success' : 'danger'}`}>{book.available ? 'Dostępna' : 'Wypożyczona'}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
