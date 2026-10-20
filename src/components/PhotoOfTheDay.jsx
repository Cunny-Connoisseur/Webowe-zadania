import { useEffect, useState } from "react"
import Photo from "./helpers/Photo"

export default ({onDelete, onToggleFavorite}) => {
    const [id, setId] = useState(randomID)
    const [photo, setPhoto] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {handleFetch()}, [id])

    const handleFetch = async () => {
        setIsLoading(true)
        try {
            const res = await fetch('/photos.json')

            if(!res.ok) throw new Error(`Błąd serwera: ${res.status}`)

            const data = await res.json()
            if(data.length == 0) throw new Error(`Brak zdjęć w pliku json`)

            let photo = data.find(x => x.id == id)
            if(!photo) {
                console.error(`Brak zdjęcia z ID = ${id}, użyto innego zdjęcia`)
                photo = data[0]
            }
            setPhoto(photo)
        } catch (err) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (<>
        <div className="justify-content-center d-flex align-items-center flex-column w-100">
            <div className="my-3 col-6 d-flex flex-column">
                <h2 className="text-center">Zdjęcie dnia</h2>

                {!isLoading && !error && photo && (
                    <Photo item={photo} minimalistic={true} />
                )}
                <button className="btn btn-primary" disabled={isLoading} onClick={() => setId(randomID())}>
                    {isLoading ? "Losowanie..." : "Losuj nowe zdjęcie"}
                </button>
            </div>
        </div>
    </>)
}

const randomID = () => Math.floor(Math.random() * 19) + 1
