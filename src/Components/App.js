import React, { useState } from "react";

import ImageGallery from "./imageGallery/ImageGallery";

import Searchbar from "./searchbar/Searchbar";

const App = () => {
  const [pictureName, setPictureName] = useState("");
  const [page, setPage] = useState(1);
  const handleFormSubmit = (pictureName) => {
    setPage(1);
    setPictureName(pictureName);
  };
  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery pictureName={pictureName} page={page} setPage={setPage} />
    </>
  );
};

export default App;
