import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../header";
import { SignIn } from "../signIn";
import { AllPosts } from "../allPosts";
import { PostDetailed } from "../post-details";
import { Success } from "../success";
import { SignUp } from "../signUp";
import { EmailConfirmed } from "../emailConfirmed";
import { Footer } from "../footer";
import { NotFound } from "../not-found/index.jsx";
import { MyContext } from "../hooks/context.hook.jsx";
import styles from "./index.scss";

export const App = () => {
    const [isShowModal, setIsShowModal] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    function handleInputSearch(event) {
        setSearchValue(event.target.value)
        console.log(searchValue)
    }

    return (
        <BrowserRouter>
            <MyContext.Provider value={isDarkTheme}>
                <Header setIsDarkTheme={setIsDarkTheme} handleInputSearch={handleInputSearch} />
                <main className={isDarkTheme ? "dark-theme" : ''}>
                    <Routes>
                        <Route path="blog" element={<AllPosts searchValue={searchValue} />} />
                        <Route path="/blog/:postId" element={<PostDetailed />} />
                        <Route path="sign-in" element={<SignIn setIsShowModal={setIsShowModal} />} />
                        <Route path="sign-up" element={<SignUp setIsShowModal={setIsShowModal} />} />
                        <Route path="email-confirmed" element={<EmailConfirmed setIsShowModal={setIsShowModal} />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </main>
                {isShowModal && <Success setIsShowModal={setIsShowModal} />}
            </MyContext.Provider>
        </BrowserRouter>

    )
}