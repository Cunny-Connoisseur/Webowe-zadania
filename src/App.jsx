import { useState } from 'react'
import { initialRecipes } from './data/recipes'

export default function App() {
  const recipes = initialRecipes
  const [ascending, setAscending] = useState(true)

  const direction = ascending ? 1 : -1
  const sortedRecipes = [...recipes].sort((a, b) => (a.minutes - b.minutes) * direction)

  return [...recipes, {...recipe, id}]
    })
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

    </div>
  )
}
