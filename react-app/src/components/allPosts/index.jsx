import { useContext, useState } from "react";
import { MyContext } from "../hooks/context.hook";
import { Post } from "../post";
import { postsData } from "./data";
import styles from "./index.scss";
import { useNavigate } from "react-router-dom";

export const AllPosts = ({ searchValue }) => {
    const [filterValue, setFilterValue] = useState('all');
    const isDarkTheme = useContext(MyContext);

    const navigate = useNavigate()

    // const handleFavoritesClick = () => {
    //     setFilterValue("favorites");
    //     navigate('/blog/favorites', { replace: true });
    // }

    return (
        <section className={isDarkTheme ? "posts_dark" : "posts"}>
            <div className="wrapper">
                <h1 className="posts__title">{searchValue ? `Search results for "${searchValue}"` : "Blog"}</h1>
                <div className={`btns ${isDarkTheme ? "btns_dark" : ''}`}>
                    <button className="btns__item" onClick={() => setFilterValue("all")}>All</button>
                    <button className="btns__item" onClick={() => setFilterValue("favorites")}>My Favorites</button>
                    <button className="btns__item" onClick={() => setFilterValue("popular")}>Popular</button>
                </div>
                <div className={filterValue === "all" ? "posts__wrapper" : "posts_wrapper_flex"}>
                    {postsData
                        .filter((post) => {
                            if (filterValue === "all") {
                                return post;
                            } else if (filterValue === "favorites") {
                                return post.favorite;
                            } else if (filterValue === "popular") {
                                return post.popular;
                            }
                        })
                        .filter((post) => {
                            if (searchValue) {
                                return post.title.toLowerCase().includes(searchValue.toLowerCase())
                            } else {
                                return post
                            }
                        })
                        .map((item, index) => {
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
                                filterValue={filterValue}
                            />;
                        })
                    }
                </div>
            </div>
        </section>
    );
};
