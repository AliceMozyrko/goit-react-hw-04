import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, onImgClick }) {
  return (
    <ul className={css.container}>
      {items.map((item, index) => (
        <li key={`${item.id}-${index}`} className={css.cardItem}>
          <ImageCard
            src={item.urls.small}
            alt={item.alt_description}
            className={css.card}
            onClick={() => onImgClick(item)}
            likes={item.likes}
          />
        </li>
      ))}
    </ul>
  );
}

