import css from "./ImageCard.module.css";
import { BiLike } from "react-icons/bi";
export default function ImageCard({ src, alt, likes, onClick }) {
  return (
    <div className={css.card} >
      <img src={src} alt={alt} className={css.img} onClick={onClick}/>
      <p className={css.likes}><BiLike className={css.likeIcon} />Likes: {likes}</p>
    </div>
  );
}
