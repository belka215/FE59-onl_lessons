import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addPostsAction, addPostsMiddlewareAction, changeTabAction } from "../../actions";
import { Post } from "../post";
import { ImgModal } from "../img-modal";
import { Spinner } from "../spinner";
import { NoSearchResult } from "../noSearchResult";
import styles from "./index.scss";
import { Pagination } from "../pagination";

export const LIMIT = 12;

export const AllPosts = ({ searchValue }) => {
    const { category } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isDarkTheme = useSelector(state => state.isDarkTheme);
    const img = useSelector(state => state.img);
    const posts = useSelector((state) => state.posts)
    const filterValue = useSelector((state) => state.tab);
    const [order, setOrder] = useState('title');
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(changeTabAction(category));
        dispatch(addPostsMiddlewareAction(searchValue, order, LIMIT, page))
        console.log(posts)
    }, []);

    const handleClickTab = (category) => {
        return () => {
            dispatch(changeTabAction(category));
            navigate(`/blog/${category}`)
        }
    }

    const handleLoadMore = () => {
        dispatch(addPostsMiddlewareAction(searchValue, order, LIMIT, page + 1))
        setPage((prevState) => prevState + 1);
    };

    const handleChangePage = (newPage) => {
        dispatch(addPostsMiddlewareAction(searchValue, order, LIMIT, newPage))

        setPage(newPage);
    };

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
                    <select className="btns__item" onClick={(event) => setOrder(event.target.value)}>
                        <option value="title">Title</option>
                        <option value="author">Author</option>
                        <option value="date">Date</option>
                    </select>
                </div>
                <div className={filterValue === "all" ? "posts__wrapper" : "posts_wrapper_flex"}>
                    {posts
                        .map((item, index) => {
                            return <Post
                                post={item}
                                index={index}
                                key={index}
                                size={index <= 5 ? "medium" : "small"}
                                filterValue={filterValue}
                            />;
                        })
                    }
                    {/* {!posts.content?.length && !posts.loading && <NoSearchResult />} */}
                </div>
                <Pagination count={posts.count}
                    limit={LIMIT}
                    page={page}
                    handleChangePage={handleChangePage}
                />
                {page * (LIMIT + 1) <= posts.count && (
                    <div onClick={handleLoadMore}>
                        <button >Load more</button>
                    </div>
                )}
            </div>
            {img && <ImgModal img={img} />}
        </section>
    );
};
