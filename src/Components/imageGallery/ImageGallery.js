import { useEffect, useState } from "react";
import { apiService } from "../../services/api.js";
import Loader from "react-loader-spinner";
import Button from "../button/Button";
import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ pictureName, page, setPage }) => {
  const [pictures, setPicrures] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (pictureName) {
      if (page === 1) {
        setLoading(true);
        apiService(pictureName, 1)
          .then((pictures) => {
            setPicrures(pictures.hits);
            setLoading(true);
            setPage(1);
          })
          .finally(() => {
            setLoading(false);
          });
      }

      if (page !== 1) {
        setLoading(true);
        apiService(pictureName, page)
          .then((img) => {
            setPicrures((prev) => [...(prev || []), ...img.hits]);
            setLoading(true);
          })
          .finally(() => {
            setLoading(false);
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth",
            });
          });
      }
    }
  }, [page, pictureName]);

  const onHandleonClick = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      {loading && <Loader />}
      <ul className={s.ImageGallery}>
        {pictures && <ImageGalleryItem pictures={pictures} />}
      </ul>
      {pictures && <Button onHandleonClick={onHandleonClick} />}
    </>
  );
};

export default ImageGallery;
