// Urls to be called in unplash api

const Urls = {
    GET_PHOTOS: `https://api.unsplash.com/photos/?client_id=${import.meta.env.VITE_ACCESS_KEY}`,
    GET_PHOTO: `https://api.unsplash.com/photos/:id/?client_id=${import.meta.env.VITE_ACCESS_KEY}`,
}

export default Urls;