import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { addPostsAction, addPostsMiddlewareAction, changeOrderAction, changeTabAction } from "../../actions";
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
    const posts = useSelector((state) => state.posts.content);
    const count = useSelector((state) => state.posts.count);
    const filterValue = useSelector((state) => state.tab);
    const order = useSelector((state) => state.order);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(changeTabAction(category));
        dispatch(addPostsMiddlewareAction('', order, LIMIT, page))
        console.log(posts)
    }, []);

    const handleClickTab = (category) => {
        return () => {
            dispatch(changeTabAction(category));
            navigate(`/blog/${category}`)
        }
    }

    const handleChangePage = (newPage) => {
        dispatch(addPostsMiddlewareAction(searchValue, order, LIMIT, newPage))
        setPage(newPage);
    };

    const handleOrderChange = (order) => {
        console.log(order);
        dispatch(changeOrderAction(order));
        dispatch(addPostsMiddlewareAction(searchValue, order, LIMIT, page))
    }

    if (!posts) {
        return <Spinner />
    }

    return (
        <section className={isDarkTheme ? "posts_dark" : "posts"}>
            <div className="wrapper">
                <h1 className="posts__title">{searchValue ? `Search results for "${searchValue}"` : "Blog"}</h1>
                <div className={`btns ${isDarkTheme ? "btns_dark" : ''}`}>
                    <div>
                        <button className="btns__item" onClick={handleClickTab("all")}>All</button>
                        <button className="btns__item" onClick={handleClickTab("favorites")}>My Favorites</button>
                        <button className="btns__item" onClick={handleClickTab("popular")}>Popular</button>
                        <select className="btns__item" onClick={(event) => handleOrderChange(event.target.value)}>
                            <option value="title">Title</option>
                            <option value="author">Author</option>
                            <option value="date">Date</option>
                        </select>
                    </div>
                    <Link to="/create-post" className="create-container">
                        <button className="create-container__btn">Create Post</button>
                    </Link>

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
                    {!posts.content?.length && <NoSearchResult />}
                </div>
                <Pagination count={count}
                    limit={LIMIT}
                    page={page}
                    handleChangePage={handleChangePage}
                />
            </div>
            {img && <ImgModal img={img} />}
        </section>
    );
};
