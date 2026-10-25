let photos = null

export const downloadPhotos = async () => {
    if(photos) return photos

    const res = await fetch('/photos.json')

    if(!res.ok) 
        throw new Error(`Błąd serwera: ${res.status}`)
    photos = await res.json()

    return photos
}

export const downloadPhoto = async (id) => {
    const photo = (await downloadPhotos()).find(x => x.id === Number(id)) ?? null
    
    return photo
}

export const deletePhoto = (id) => {
    photos = photos.filter(x => x.id !== id)

    return photos
}

export const toggleFavorite = (id) => {
    photos = photos.map(x => (x.id === id ? {...x, favorite: !x.favorite} : x))

    return photos
}

export const addPhoto = async (new_photo) => {
    const newID = Math.max(...photos.map(x => x.id)) + 1
    
    photos = [...photos, {...new_photo, id: newID, favorite: false}]
    
    return photos
}