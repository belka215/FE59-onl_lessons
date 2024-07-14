import { postsData } from "../components/allPosts/data";

export const CHANGE_THEME = 'CHANGE_THEME';
export const ADD_IMG = 'ADD_IMG';
export const REMOVE_IMG = 'REMOVE_IMG';
export const ADD_POSTS = 'ADD_POSTS';
export const ADD_DETAILED_POST = 'ADD_DETAILED_POST';
export const CHANGE_LIKE = 'CHANGE_LIKE';
export const CHANGE_DISLIKE = 'CHANGE_DISLIKE';
export const CHANGE_TAB = 'CHANGE_TAB';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';

export const CHANGE_THEME_ACTION = { type: CHANGE_THEME };
export const REMOVE_IMG_ACTION = { type: REMOVE_IMG };

export const addPostsAction = (posts) => ({ type: ADD_POSTS, payload: posts })
export const addDetailedPostAction = (post) => ({ type: ADD_DETAILED_POST, payload: post })
export const addImgAction = (image) => ({ type: ADD_IMG, payload: image });
export const changeLikeAction = (id) => ({ type: CHANGE_LIKE, id });
export const changeDislikeAction = (id) => ({ type: CHANGE_DISLIKE, id });
export const changeTabAction = (tab) => ({ type: CHANGE_TAB, tab });
export const addToFavorites = (id) => ({ type: ADD_TO_FAVORITES, id });

export const addPostsMiddlewareAction = () => {
    return (dispatch) => {
        const URL = 'https://studapi.teachmeskills.by/blog/posts/?limit=11';
        fetch(URL)
            .then((response) => {
                return response.json()
            })

            .then(({ results }) => {
                console.log({ results })
                dispatch(addPostsAction(results));
            })
            .catch((e) => console.log(e));
    }
}

export const addDetailedPostMiddlewareAction = (id) => {
    return (dispatch) => {
        const URL = 'https://studapi.teachmeskills.by/blog/posts/' + id;
        fetch(URL)
            .then((response) => {
                return response.json()
            })

            .then((response) => {
                console.log(response)
                dispatch(addDetailedPostAction(response));
            })
            .catch((e) => console.log(e));
    }
}