import useFetchData from "../hooks/useFetchData";
import Urls from "../const/Url";
import PhotoGallery from "../components/PhotoGallery";
import Loading from "../components/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";

// This is the Home page component where photo lists are displayed, /photos

function Home() {
  let [photos, setPhotos] = useState([]);
  let [page, setPage] = useState(1);
  let fetchPhotos = useFetchData(Urls.GET_PHOTOS + `&page=${page}`);

  useEffect(() => {
    if (Array.isArray(fetchPhotos)) {
      let newPhotos = [...photos, ...fetchPhotos];
      setPhotos(newPhotos);
    }
  }, [fetchPhotos]);

  return (
    <InfiniteScroll
      dataLength={photos.length}
      next={() => setPage((prevPage) => prevPage + 1)}
      hasMore={page < 5 ? true : false}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      loader={<Loading />}
    >
      <PhotoGallery photos={photos} />
    </InfiniteScroll>
  );
}

export default Home;
