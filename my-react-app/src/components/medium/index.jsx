import React from 'react';
import like from '../img/like.png';
import dislike from '../img/dislike.png';
import save from '../img/save.png';
import styles from "./index.scss";

export const Medium = ({ post }) => {
    return (
        <div className="medium-container">
            <div className="img">
                <img src={post.image} />
            </div>
            <div className="date">{post.date}</div>
            <h3 className="title">{post.title}</h3>
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

