import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import Urls from "../const/Url";
import { useState, useEffect } from "react";
import Photo from "../components/Photo";

// This is the PhotoDetail page component where photo details are displayed, /photo/:id

function PhotoDetail() {

    let [photo, setPhoto] = useState(null);
    const { id } = useParams();
    let fetchPhoto = useFetchData(Urls.GET_PHOTO.replace(":id", id));

    useEffect(() => {
        if (fetchPhoto?.id) {
            setPhoto(fetchPhoto);
        }
    }, [fetchPhoto]);

    return (
        <Photo photo={photo} />
    );



}

export default PhotoDetail;