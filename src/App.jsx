import { initialRecipes } from './data/recipes'

export default function App() {
  const recipes = initialRecipes
  return [...recipes, {...recipe, id}]
    })
  }

  return (
    <div className="container mt-4">
      <h1>Książka przepisów</h1>

      <div className="row g-3 mb-4">
        {recipes.map(recipe => (
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
