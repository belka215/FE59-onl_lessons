import likeIcon from "../post/img/like_icon.png";
import dislikeIcon from "../post/img/dislike_icon.png";
import saveIcon from "../post/img/save_icon.png";
import leftArrow from './img/left-arrow.svg';
import rightArrow from './img/right-arrow.svg';
import styles from "./index.scss";

export const PostDetailed = ({ post, setCurrentPost }) => {
    console.log(post)
    return (
        <div className="detailed-post">
            <button className="home-btn" onClick={() => setCurrentPost(null)}>Back to home</button>
            <div className="detailed-post__container">
                <h1 className="detailed-post__title">{post.title}</h1>
                <img src={post.image} alt="#" />
                <p className="detailed-post__text">{post.text}</p>
                <div className="detailed-post__actions">
                    <div className="detailed-post__like">
                        <img src={likeIcon} alt="Like" className="post__icon" />
                        <img src={dislikeIcon} alt="Dislike" className="post__icon" />
                    </div>
                    <div className="detailed-post__save">
                        <button className="post__add">
                            <img src={saveIcon} alt="Save" className="post__icon" />Add to Favorites
                        </button>
                    
                    </div>
                </div>
                <div className="pagination">
                    <div className="pagination__prev-button">
                        <button className="prev">
                            <img src={leftArrow}/>
                            Previous Article</button>
                    </div>
                    <div className="pagination__next-button">
                        <button className="next">
                            Next Article
                            <img src={rightArrow}/></button>
                    </div>
                </div>
            </div>

        </div>
    )
}