import { useState } from 'react'
import { initialRecipes } from './data/recipes'

export default function App() {
  const [recipes, setRecipes] = useState(initialRecipes)
  const [ascending, setAscending] = useState(true)
  const [name, setName] = useState('')
  const [minutes, setMinutes] = useState('')

  const direction = ascending ? 1 : -1
  const sortedRecipes = [...recipes].sort((a, b) => (a.minutes - b.minutes) * direction)

  const handleAddRecipe = (recipe) => {
    setRecipes(recipes => {
      const id = Math.max(...recipes.map(recipe => recipe.id), 0) + 1
      return [...recipes, {...recipe, id}]
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    handleAddRecipe({name, category: 'inne', minutes: Number(minutes)})
    setName('')
    setMinutes('')
  }

  return (
    <div className="container mt-4">
      <h1>Książka przepisów</h1>

      <button type="button" className="btn btn-outline-primary mb-3" onClick={() => setAscending(!ascending)}>
        Czas: {ascending ? 'rosnąco ▲' : 'malejąco ▼'}
      </button>

      <div className="row g-3 mb-4">
        {sortedRecipes.map(recipe => (
          <div key={recipe.id} className="col-12 col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title h5">{recipe.name}</h3>
                <span className="badge text-bg-secondary mb-2">{recipe.category}</span>
                <p className="text-body-secondary mb-0">Czas przygotowania: {recipe.minutes} min</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="h4">Dodaj przepis</h2>
      <form onSubmit={handleSubmit} className="mb-5">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nazwa</label>
          <input id="name" type="text" className="form-control" value={name} onChange={event => setName(event.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="minutes" className="form-label">Czas przygotowania (min)</label>
          <input id="minutes" type="number" className="form-control" value={minutes} onChange={event => setMinutes(event.target.value)} />
        </div>

        <button type="submit" className="btn btn-primary">Zapisz</button>
      </form>
    </div>
  )
}
