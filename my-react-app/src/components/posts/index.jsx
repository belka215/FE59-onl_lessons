import React from 'react';
import { Large } from "../large";
import { Medium } from "../medium";
import { Small } from "../small";
import styles from "./index.scss";

export const Posts = ({ posts }) => {
    
    return (
        <div className="posts">
            <div className="wrapper">
                {posts.map(post => {
                    if (post.id === 1) {
                        return <Large post={post} />
                    } else if (post.id === 2) {
                        return <Medium post={post} />
                    } else if (post.id === 4) {
                        return <Small post={post} />
                    }
                })}
            </div>
        </div>
    )
}