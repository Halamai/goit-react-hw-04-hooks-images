import { useState } from "react";
import s from "./Searchbar.module.css";

const Searchbar = ({ onSubmit }) => {
  const [picture, setPicture] = useState("");

  const inputChange = (e) => {
    setPicture(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(picture);
  };
  //  reset = () => {
  //   setPicture("");
  // };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={onFormSubmit}>
        <button type="submit" className={s.SearchForm_button}>
          <span className={s.SearchForm_button_labe}>Search</span>
        </button>

        <input
          onChange={inputChange}
          className={s.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
