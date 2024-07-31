import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../header";
import { MainPage } from "../main-page/index.jsx";
import { SignIn } from "../signIn";
import { AllPosts } from "../allPosts";
import { PostDetailed } from "../post-details";
import { Success } from "../success";
import { SignUp } from "../signUp";
import { EmailConfirmed } from "../emailConfirmed";
import { Footer } from "../footer";
import { NotFound } from "../not-found/index.jsx";
import styles from "./index.scss";
import { EmailActivation } from "../emailActivation/index.jsx";
import { UserPage } from "../userPage/index.jsx";
import { addPostsMiddlewareAction } from "../../actions/index.js";
import { CreatePost } from "../createPost/index.jsx";


export const App = () => {
    const [isShowModal, setIsShowModal] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();

    const isDarkTheme = useSelector(state => state.isDarkTheme);

    function handleInputSearch(event) {
        setSearchValue(event.target.value)
        dispatch(addPostsMiddlewareAction(searchValue));
    }

    return (
        <BrowserRouter>
            {/* <MyContext.Provider value={isDarkTheme}> */}
            <Header handleInputSearch={handleInputSearch} searchValue={searchValue} />
            <main className={isDarkTheme ? "dark-theme" : ''}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="blog/:category" element={<AllPosts searchValue={searchValue} />} />
                    <Route path="/blog/:category/:postId" element={<PostDetailed />} />
                    <Route path="sign-in" element={<SignIn setIsShowModal={setIsShowModal} />} />
                    <Route path="sign-up" element={<SignUp setIsShowModal={setIsShowModal} />} />
                    <Route path="email-confirmed" element={<EmailConfirmed setIsShowModal={setIsShowModal} />} />
                    <Route path="/activate/:uid/:token" element={<EmailActivation setIsShowModal={setIsShowModal}/>} />
                    <Route path="user-page" element={<UserPage setIsShowModal={setIsShowModal} />} />
                    <Route path="create-post" element={<CreatePost setIsShowModal={setIsShowModal}/>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </main>
            {isShowModal && <Success setIsShowModal={setIsShowModal} />}
            {/* </MyContext.Provider> */}
        </BrowserRouter>

    )
}