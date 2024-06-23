import React, { useState, useEffect } from "react";
import { Header } from "../header";
import { SignIn } from "../signIn";
import { AllPosts } from "../allPosts";
import { Success } from "../success";
import { SignUp } from "../signUp";
import { Footer } from "../footer";
import styles from "./index.scss";
import { EmailConfirmed } from "../emailConfirmed";


export const App = () => {
    const [page, setPage] = useState('allPosts');
    const [isShowModal, setIsShowModal] = useState(false);

    return (
        <>
            <Header setPage={setPage} />
            <body>
                {page === "signIn" && <SignIn setPage={setPage} setIsShowModal={setIsShowModal} />}
                {page === "allPosts" && <AllPosts />}
                {page === "signUp" && <SignUp setPage={setPage} setIsShowModal={setIsShowModal} />} 
                {page === "emailConfirmed" && <EmailConfirmed setPage={setPage} setIsShowModal={setIsShowModal} />}
                <Footer />
            </body>
            {isShowModal && <Success setPage={setPage} setIsShowModal={setIsShowModal} />}
        </>
    )
}