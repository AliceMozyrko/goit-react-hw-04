import SearchBar from "../SeachBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { BallTriangle } from 'react-loader-spinner';
import { useEffect, useState } from "react";
import { fetchPhotos } from "../../photos-api";
import toast, { Toaster } from 'react-hot-toast';
import css from "./App.module.css";
import ImageModal from "../ImageModal/ImageModal";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1)
  const [topic, setTopic] = useState("")
  const [totalPages, setTotalPages] = useState(0)
  const [onImg, setOnImg] = useState(null)
  const [isModalOpen, setisModalOpen] = useState(false)

  const handleSearch = async (newTopic) => {
    setPhotos([]);
    setPage(1)
    setTopic(newTopic)
  };

  const handleLoadMore = () => {
    setPage(page + 1)
  }
  const modalOpen = (image) => {
      setOnImg(image)
      setisModalOpen(true)
  }
  
    const modalClosed = () => {
      setOnImg(null)
      setisModalOpen(false)
  }
  
  useEffect(() => {
    if (topic === "") {
      return
    }

    async function getPhotos() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchPhotos(topic, page);
        setTotalPages(data.total_pages)
        setPhotos(prevPhotos => {
          return [...prevPhotos, ...data.results]
        });
      } catch (error) {
        toast.error("Please, try to reload this page!")
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getPhotos()
  }, [page, topic])

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <p className={css.errorTxt}>Something went wrong...</p>}
      {photos.length > 0 && <ImageGallery items={photos} onImgClick={modalOpen} />}
      {loading && (
        <div className={css.loader}>
          <BallTriangle
            height={50}
            width={50}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
      {photos.length > 0 && !loading && !(page >= totalPages) && <button className={css.loadMoreBtn} onClick={handleLoadMore}>Load more</button>}
      {page === totalPages && <p className={css.lastPageTxt}>Sorry, this is the last page for now! ☹️</p>}
      <ImageModal isOpen={isModalOpen} onRequestClose={modalClosed} img={onImg} />
      <Toaster position="top-right"/>
    </div>
  );
}
