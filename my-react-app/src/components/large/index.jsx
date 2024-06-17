import React from 'react';
import like from '../img/like.png';
import dislike from '../img/dislike.png';
import save from '../img/save.png';
import styles from "./index.scss";

export const Large = ({ post }) => {
    return (
        <div className="large-container">
            <div className="content">
                <div className="content__left">
                    <div className="content__left__date">{post.date}</div>
                    <div className="content__left__article">
                        <h3 className="title">{post.title}</h3>
                        <p className="text">{post.text}</p>
                    </div>
                </div>
                <div className="content__right">
                    <img src={post.image} className="img_large" />
                </div>
            </div>
            <div className="icons">
                <div className="icons__left">
                    <img src={like} />
                    <img src={dislike} />
                </div>
                <div className="icons__right">
                    <img src={save} />
                </div>
            </div>
            <div className="author">{post.author}</div>
        </div>
    )
}

