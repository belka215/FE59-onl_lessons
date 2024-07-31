import { postsData } from "../components/allPosts/data";
import { fetchToken } from "../api/auth";
import { fetchUserInfo } from "../api/user";
import { fetchPosts } from "../api/posts";

export const CHANGE_THEME = 'CHANGE_THEME';
export const ADD_IMG = 'ADD_IMG';
export const REMOVE_IMG = 'REMOVE_IMG';
export const ADD_POSTS = 'ADD_POSTS';
export const ADD_DETAILED_POST = 'ADD_DETAILED_POST';
export const CHANGE_LIKE = 'CHANGE_LIKE';
export const CHANGE_DISLIKE = 'CHANGE_DISLIKE';
export const CHANGE_TAB = 'CHANGE_TAB';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const POST_USER_DATA = "POST_USER_DATA";
export const RECEIVED_USER_DATA = "RECEIVED_USER_DATA";
export const RECEIVED_POSTS_DATA = "RECEIVED_POSTS_DATA";
export const CHANGE_ORDER = 'CHANGE_ORDER';

export const CHANGE_THEME_ACTION = { type: CHANGE_THEME };
export const REMOVE_IMG_ACTION = { type: REMOVE_IMG };
export const POST_USER_DATA_ACTION = { type: POST_USER_DATA };

export const addPostsAction = (posts, count) => ({ type: ADD_POSTS, payload: { posts, count } })
export const addDetailedPostAction = (post) => ({ type: ADD_DETAILED_POST, payload: post })
export const addImgAction = (image) => ({ type: ADD_IMG, payload: image });
export const changeLikeAction = (id) => ({ type: CHANGE_LIKE, id });
export const changeDislikeAction = (id) => ({ type: CHANGE_DISLIKE, id });
export const changeTabAction = (tab) => ({ type: CHANGE_TAB, tab });
export const addToFavorites = (id) => ({ type: ADD_TO_FAVORITES, id });
export const addUserDataAction = (user) => ({ type: RECEIVED_USER_DATA, user });
export const addPostsDataAction = (posts) => ({ type: RECEIVED_POSTS_DATA, posts});
export const changeOrderAction = (order) => ({ type: CHANGE_ORDER, order })

export const addPostsMiddlewareAction = (searchValue, order, limit, page) => {
    return (dispatch) => {
        fetchPosts(searchValue, order, limit, page, dispatch)
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
                dispatch(addDetailedPostAction(response));
            })
            .catch((e) => console.log(e));
    }
}

export const signUpMiddlewareAction = ({ login, email, password }) => {
    return (dispatch) => {
        dispatch(POST_USER_DATA_ACTION);

        const URL = "https://studapi.teachmeskills.by/auth/users/";

        const data = {
            username: login,
            email,
            password,
            course_group: 1,
        };

        fetch(URL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((json) => dispatch(addUserDataAction(json)))
            .catch(e => console.log(e))
    };
};

export const activationEmailMiddlewareAction = (uid, token) => {
    return (dispatch) => {
        const URL = "https://studapi.teachmeskills.by/auth/users/activation/";
        const data = { uid, token };

        fetch(URL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
            });
    };
};

export const authorizationMiddlewareAction = (values, navigate) => {
    return (dispatch) => {
        fetchToken(values).then(() => {
            fetchUserInfo(navigate).then((response) => {
                dispatch(addUserDataAction(response));
            });
        });
    };
};

export const getUserInfoMiddlewareAction = (navigate) => {
    return (dispatch) => {
        fetchUserInfo(navigate).then((response) => {
            dispatch(addUserDataAction(response));
        });
    };
};