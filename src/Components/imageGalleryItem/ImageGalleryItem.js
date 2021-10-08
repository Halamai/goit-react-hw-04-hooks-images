import React, { useState } from "react";
import Modal from "../modal/Modal";
import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ pictures }) => {
  const [showMOdale, setShowMOdale] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState("");

  const toggleModale = (largeImageURL) => {
    setLargeImageURL(largeImageURL);
    setShowMOdale(!showMOdale);
  };

  return (
    <>
      {showMOdale && (
        <Modal onClose={toggleModale} largeImageURL={largeImageURL} />
      )}

      {pictures.map((hit) => {
        const togglePictere = () => toggleModale(hit.largeImageURL);

        return (
          <li key={hit.id} className={s.ImageGalleryItem}>
            <img
              src={hit.webformatURL}
              alt=""
              id={hit.largeImageURL}
              className={s.ImageGalleryItem_image}
              onClick={togglePictere}
            />
          </li>
        );
      })}
    </>
  );
};

export default ImageGalleryItem;
