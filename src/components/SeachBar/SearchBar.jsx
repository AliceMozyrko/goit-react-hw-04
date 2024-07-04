import { IoSearchOutline } from "react-icons/io5";
import css from "./SearchBar.module.css";
import toast, { Toaster } from 'react-hot-toast';


export default function SearchBar({ onSearch }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.elements.searchInput.value.trim();
    if (query) {
      onSearch(query);
      console.log(query);
    } 
    if (query === "") {
      toast("Search field mustn't be empty!")
    }
    event.target.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.container} onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          name="searchInput"
          autoFocus
          placeholder="Search images and photos"
          className={css.input}
        />
        <button type="submit" className={css.btn}><IoSearchOutline /></button>
      </form>
      <Toaster position="top-right"/>
    </header>
  );
}
