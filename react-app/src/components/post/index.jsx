import like from "./img/like_icon.png";
import dislike from "./img/dislike_icon.png";
import save from "./img/save_icon.png";
import options from "./img/options_icon.png";
import likePurple from "./img/like-p.png";
import dislikePurple from "./img/dislike-p.png";
import savePurple from "./img/save-p.png";
import optionsPurple from "./img/options-p.png";
import { useContext } from "react";
import { MyContext } from "../hooks/context.hook";
import styles from "./index.scss";
import { Link } from "react-router-dom";

export const Post = ({ post, index, size, filterValue }) => {
  const isDarkTheme = useContext(MyContext);

  return (
    <div className={`post post_${size} ${isDarkTheme ? "post_dark" : ''} ${filterValue === "all" ? "" : "post_filtered"}`} style={{ gridArea: `post-${index}` }}>
      <div className="post__wrapper">
        <div className="post__info">
          <p className="post__date">{post.date}</p>
          <Link to={`${post.id}`} className="post__title">{post.title}</Link>
          <p className="post__text">{post.text}</p>
        </div>
        <Link to={`${post.id}`} className="post__img">
          <img src={post.image} alt="" id={`img-${post.id}`} />
        </Link>
      </div>
      <div className="post__actions">
        <div className="post__like">
          <img src={isDarkTheme ? likePurple : like} alt="Like" className="post__icon" />
          <img src={isDarkTheme ? dislikePurple : dislike} alt="Dislike" className="post__icon" />
        </div>
        <div className="post__options">
          <img src={isDarkTheme ? savePurple : save} alt="Save" className="post__icon" />
          <img src={isDarkTheme ? optionsPurple : options} alt="Options" className="post__icon" />
        </div>
      </div>
    </div>
  );
};