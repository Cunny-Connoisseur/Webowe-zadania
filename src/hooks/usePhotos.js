import { useEffect, useState } from "react"
import { downloadPhotos } from "../services/photos"

export const usePhotos = () => {
    const [photos, setPhotos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const handleDownload = () => {
        downloadPhotos()
            .then(data => setPhotos(data))
            .catch(err => setError(err.message))
            .finally(() => setIsLoading(false))
    }
    
    useEffect(() => { handleDownload() }, [])

    return { photos, setPhotos, isLoading, error }
}