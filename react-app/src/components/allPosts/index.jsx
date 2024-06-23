import { useState } from "react";
import { Post } from "../post";
import { postsData } from "./data";
import { PostDetailed } from "../post-details";
import styles from "./index.scss";

export const AllPosts = () => {
    const [currentPost, setCurrentPost] = useState(null)

    return (
        <section className="posts">
            <div className="wrapper">
                {currentPost ? (
                    <PostDetailed post={currentPost} setCurrentPost={setCurrentPost} />
                ) : (
                    <>
                        <h1 className="posts__title">Blog</h1>
                        <div className="posts__wrapper">
                            {postsData.map((item, index) => {
                                let size = "large";

                                if (index >= 1 && index <= 4) {
                                    size = "medium";
                                } else if (index > 4) {
                                    size = "small";
                                }

                                return <Post
                                    post={item}
                                    index={index}
                                    key={index}
                                    size={size}
                                    setCurrentPost={setCurrentPost}
                                />;
                            })}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};
