import { addPostsAction } from "../actions";
import { refreshToken } from "./auth";

export const fetchPosts = (searchValue, order, limit, page, dispatch) => {
    const offset = (page - 1) * limit;
    const URL = `https://studapi.teachmeskills.by/blog/posts/?limit=${limit}&offset=${offset}&${searchValue ? `&search=${searchValue}` : ""}&ordering=${order}`;

    return fetch(URL)
        .then((response) => response.json())
        .then(({ results, count }) => {
            console.log({results, count})
            dispatch(addPostsAction(results, count));
        })
        .catch((e) => console.log(e));
}

export const createPost = (formData) => {
    const URL = "https://studapi.teachmeskills.by/blog/posts/";
    const token = localStorage.getItem("accessToken");
    const options = {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    return fetch(URL, options).then((response) => {
      if (response.status === 401) {
        return refreshToken(URL, options);
      }
  
      return response.json();
    });
  };