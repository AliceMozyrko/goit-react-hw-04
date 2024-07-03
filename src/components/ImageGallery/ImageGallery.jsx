import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css"

export default function ImageGallery({ items }) {
  return (
    <ul className={css.container}>
      {items.map((item) => (
        <li key={item.id} className={css.cardItem}>
          <ImageCard
            src={item.urls.small}
            alt={item.alt_description} 
            className={css.card}
          />
        </li>
      ))}
    </ul>
  );
}
