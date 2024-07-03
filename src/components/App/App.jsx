import SearchBar from "../SeachBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageCard from "../ImageCard/ImageCard"
import { BallTriangle } from 'react-loader-spinner'
// import axios from "axios";
import { useEffect, useState } from "react";
import { fetchPhotos } from "../../photos-api";


export default function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   async function getPhotos() {
  //     try {
  //       setLoading(true);
  //       const data = await fetchPhotos("kitten");
  //       setPhotos(data);
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   getPhotos();
  // }, []);

  const handleSearch = (newTopic) => {
    console.log(newTopic); 
  };
  
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <p>Something went wrong, try to reload the page</p>}
      {photos.length > 0 && <ImageGallery items={photos} />}
      {loading && <BallTriangle
        height={50}
        width={50}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />}
      <ImageCard />
    </div>
  );
}