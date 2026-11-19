import { useState } from 'react'
import { initialBooks } from './data/books'

const genres = [...new Set(initialBooks.map(book => book.genre))]

export default function App() {
  const [books, setBooks] = useState(initialBooks)
  const [activeGenre, setActiveGenre] = useState('all')

  const visible = activeGenre === 'all' ? books : books.filter(book => book.genre === activeGenre)

  const handleToggleFavorite = (id) => {
    setBooks(books => books.map(book => book.id === id ? {...book, favorite: !book.favorite} : book))
  }

  return (
    <div className="container mt-4">
      <h1>Katalog biblioteki</h1>

      <div className="d-flex flex-wrap gap-2 mb-3">
        {['all', ...genres].map(genre => {
          const label = genre === 'all' ? 'Wszystkie' : genre
          const buttonClass = activeGenre === genre ? 'btn btn-outline-primary active' : 'btn btn-outline-primary'

          return (
            <button type="button" key={genre} className={buttonClass} onClick={() => setActiveGenre(genre)}>{label}</button>
          )
        })}
      </div>

      <p className="text-body-secondary">Wyświetlono {visible.length} z {books.length} książek</p>

      <div className="row g-3">
        {visible.map(book => (
          <div key={book.id} className="col-12 col-md-4">
            <div className={`card h-100 ${book.available ? 'border-success' : 'border-danger'}`}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <h3 className="card-title h5">{book.title}</h3>
                  <button type="button" className="btn btn-link p-0 fs-4" onClick={() => handleToggleFavorite(book.id)}>
                    {book.favorite ? '★' : '☆'}
                  </button>
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
