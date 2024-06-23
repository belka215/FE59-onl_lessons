import React, { useState, useEffect } from "react";
import { Header } from "../header";
import { SignIn } from "../signIn";
import { AllPosts } from "../allPosts";
import { Success } from "../success";
import { Footer } from "../footer";
import styles from "./index.scss";


export const App = () => {
    const [page, setPage] = useState('allPosts');
    const [isShowModal, setIsShowModal] = useState(false);

    return (
        <>
            <Header setPage={setPage} />
            <body>
                {page === "signIn" && <SignIn setIsShowModal={setIsShowModal} />}
                {page === "allPosts" && <AllPosts />}

                <Footer />
            </body>
            {isShowModal && <Success setPage={setPage} setIsShowModal={setIsShowModal} />}
        </>
    )
}