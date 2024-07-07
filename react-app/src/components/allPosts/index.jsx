import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addPostsAction, changeTabAction } from "../../actions";
import { Post } from "../post";
import { postsData } from "./data";
import { ImgModal } from "../img-modal";
import { Spinner } from "../spinner";
import styles from "./index.scss";

export const AllPosts = ({ searchValue }) => {
    const { category } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isDarkTheme = useSelector(state => state.isDarkTheme);
    const img = useSelector(state => state.img);
    const posts = useSelector((state) => state.posts)
    const filterValue = useSelector((state) => state.tab)
    console.log(category)

    useEffect(() => {
        dispatch(changeTabAction(category));

        fetch("https://studapi.teachmeskills.by/blog/posts/?limit=11")
            .then((response) => response.json())
            .then(({ results }) => {
                dispatch(addPostsAction(postsData));
            })
            .catch((e) => console.log(e));
    }, []);

    const handleClickTab = (category) => {
        return () => {
            dispatch(changeTabAction(category));
            navigate(`/blog/${category}`)
        }
    }

    if (!posts) {
        return <Spinner />
    }

    return (
        <section className={isDarkTheme ? "posts_dark" : "posts"}>
            <div className="wrapper">
                <h1 className="posts__title">{searchValue ? `Search results for "${searchValue}"` : "Blog"}</h1>
                <div className={`btns ${isDarkTheme ? "btns_dark" : ''}`}>
                    <button className="btns__item" onClick={handleClickTab("all")}>All</button>
                    <button className="btns__item" onClick={handleClickTab("favorites")}>My Favorites</button>
                    <button className="btns__item" onClick={handleClickTab("popular")}>Popular</button>
                </div>
                <div className={filterValue === "all" ? "posts__wrapper" : "posts_wrapper_flex"}>
                    {posts
                        // .reduce((result, post) => {

                        // }, [])
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
            {img && <ImgModal img={img} />}
        </section>
    );
};
