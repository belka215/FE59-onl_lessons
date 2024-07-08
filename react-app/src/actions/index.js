export const CHANGE_THEME = 'CHANGE_THEME';
export const ADD_IMG = 'ADD_IMG';
export const REMOVE_IMG = 'REMOVE_IMG';
export const ADD_POSTS = 'ADD_POSTS';
export const CHANGE_LIKE = 'CHANGE_LIKE';
export const CHANGE_DISLIKE = 'CHANGE_DISLIKE';
export const CHANGE_TAB = 'CHANGE_TAB';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';

export const CHANGE_THEME_ACTION = { type: CHANGE_THEME };
export const REMOVE_IMG_ACTION = { type: REMOVE_IMG };

export const addPostsAction = (posts) => ({ type: ADD_POSTS, payload: posts })
export const addImgAction = (image) => ({ type: ADD_IMG, payload: image });
export const changeLikeAction = (id) => ({ type: CHANGE_LIKE, id });
export const changeDislikeAction = (id) => ({ type: CHANGE_DISLIKE, id });
export const changeTabAction = (tab) => ({ type: CHANGE_TAB, tab });
export const addToFavorites = (id) => ({ type: ADD_TO_FAVORITES, id});
