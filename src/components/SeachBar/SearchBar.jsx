import { IoSearchOutline } from "react-icons/io5";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (event) => {
    console.log("Form submit event triggered"); // Log when the form submit event is triggered
    event.preventDefault();
    const query = event.target.elements.searchInput.value.trim();
    console.log("Form submitted with query:", query); 
    if (query) {
      onSearch(query);
    }
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
    </header>
  );
}
