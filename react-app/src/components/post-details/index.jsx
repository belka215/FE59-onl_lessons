import { useContext, useState, useEffect } from "react";
import { MyContext } from "../hooks/context.hook";
import { Link, useParams, useNavigate } from "react-router-dom";
import { postsData } from "../allPosts/data.js";
import like from "../post/img/like_icon.png";
import dislike from "../post/img/dislike_icon.png";
import save from "../post/img/save_icon.png";
import likePurple from "../post/img/like-p.png";
import dislikePurple from "../post/img/dislike-p.png";
import savePurple from "../post/img/save-p.png";
import leftArrow from './img/left-arrow.svg';
import rightArrow from './img/right-arrow.svg';
import styles from "./index.scss";



export const PostDetailed = () => {
    const isDarkTheme = useContext(MyContext);
    const navigate = useNavigate();
    const { postId } = useParams();

    const post = postsData.find((post) => post.id === +postId);

    return (
        <div className={isDarkTheme ? "detailed-post_dark" : "detailed-post"}>
            <div className="wrapper">
                <Link to="/blog" className={`btn_underline ${isDarkTheme ? "btn_underline_dark" : ""}`}>Back to home</Link>
                <div className="detailed-post__container">
                    <h1 className="detailed-post__title">{post.title}</h1>
                    <img src={post.image} alt="#" />
                    <p className="detailed-post__text">{post.text}</p>
                    <div className="detailed-post__actions">
                        <div className="detailed-post__like">
                            <img src={isDarkTheme ? likePurple : like} alt="Like" className="post__icon" />
                            <img src={isDarkTheme ? dislikePurple : dislike} alt="Dislike" className="post__icon" />
                        </div>
                        <div className="detailed-post__save">
                            <button className="post__add">
                                <img src={isDarkTheme ? savePurple : save} alt="Save" className="post__icon" />Add to Favorites
                            </button>

                        </div>
                    </div>
                    <div className="pagination">
                        <div className={`pagination__prev-button ${isDarkTheme ? "pagination__prev-button_dark" : ''}`}>
                            <button className="prev">
                                <img src={leftArrow} />
                                Previous Article</button>
                        </div>
                        <div className={`pagination__next-button ${isDarkTheme ? "pagination__next-button_dark" : ''}`}>
                            <button className="next">
                                Next Article
                                <img src={rightArrow} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}