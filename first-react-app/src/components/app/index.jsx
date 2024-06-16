import React from "react";
import { Title } from "../title";
import { BurgerBtn } from "../burger-btn";
import { Alert } from "../alert";
import styles from './index.scss';

export const App = () => {
    return (
        <>
        <Title />
        <BurgerBtn isActive={true}/>
        <Alert status={'ok'}/>
        </>
        
    );
};