import likeIcon from "./img/like_icon.png";
import dislikeIcon from "./img/dislike_icon.png";
import saveIcon from "./img/save_icon.png";
import optionsIcon from "./img/options_icon.png";
import { postsData } from "../allPosts/data";
import styles from "./index.scss";

export const Post = ({ post, index, size, setCurrentPost }) => {

  return (
    <div className={`post post_${size}`} style={{ gridArea: `post-${index}` }}>
      <div className="post__wrapper">
        <div className="post__info">
          <p className="post__date">{post.date}</p>
          <h3 className="post__title" id={`title-${post.id}`} onClick={() => setCurrentPost(post)}>{post.title}</h3>
          <p className="post__text">{post.text}</p>
        </div>
        <div className="post__img" >
          <img src={post.image} alt="" id={`img-${post.id}`} onClick={() => setCurrentPost(post)} />
        </div>
      </div>
      <div className="post__actions">
        <div className="post__like">
          <img src={likeIcon} alt="Like" className="post__icon" />
          <img src={dislikeIcon} alt="Dislike" className="post__icon" />
        </div>
        <div className="post__options">
          <img src={saveIcon} alt="Save" className="post__icon" />
          <img src={optionsIcon} alt="Options" className="post__icon" />
        </div>
      </div>
    </div>
  );
};