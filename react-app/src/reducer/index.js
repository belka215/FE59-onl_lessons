import { ADD_IMG, CHANGE_THEME, REMOVE_IMG, ADD_POSTS, CHANGE_LIKE, CHANGE_DISLIKE, CHANGE_TAB, ADD_TO_FAVORITES, ADD_DETAILED_POST, POST_USER_DATA, RECEIVED_USER_DATA } from "../actions";

const initialState = {
    isDarkTheme: false,
    img: '',
    posts: null,
    detailedPost: null,
    tab: 'all',
    user: {
        content: {},
        loading: false,
        errors: {},
    }
};


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return {
                ...state,
                isDarkTheme: !state.isDarkTheme,
            }
        case ADD_IMG:
            return {
                ...state,
                img: action.payload,
            }
        case REMOVE_IMG:
            return {
                ...state,
                img: '',
            }
        case ADD_POSTS:
            return {
                ...state,
                posts: action.payload,
            }
        case CHANGE_LIKE:
            return {
                ...state,
                posts: state.posts.map(post => {
                    return post.id === action.id ? { ...post, like: !post.like, dislike: false } : post;
                })
            }
        case CHANGE_DISLIKE:
            return {
                ...state,
                posts: state.posts.map(post => {
                    return post.id === action.id ? { ...post, dislike: !post.dislike, like: false } : post
                })
            }
        case CHANGE_TAB:
            return {
                ...state,
                tab: action.tab,
            }
        case ADD_TO_FAVORITES:
            return {
                ...state,
                posts: state.posts.map(post => {
                    return post.id === action.id ? { ...post, favorite: !post.favorite } : post
                })
            }

        case ADD_DETAILED_POST:
            return {
                ...state,
                detailedPost: action.payload,
            }
        case POST_USER_DATA:
            return {
                ...state,
                user: {
                    ...state.user,
                    loading: true,
                }
            }
        case RECEIVED_USER_DATA:
            return {
                ...state,
                user: {
                    ...state.user,
                    content: action.user,
                    loading: false,
                }
            }

        default:
            return state;
    }
};