import { useEffect, useState } from "react"
import Photo from "./helpers/Photo"

export default ({onDelete, onToggleFavorite}) => {
    const [id, setId] = useState(randomID)
    const [photo, setPhoto] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {handleFetch()}, [id])


    return (<>
        <Photo item={photo} onDelete={onDelete} onToggleFavorite={onToggleFavorite} />
    </>)
}

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

const randomID = () => Math.floor(Math.random() * 20) + 1