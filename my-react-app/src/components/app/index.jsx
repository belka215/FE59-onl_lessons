import React, { useState } from "react";
// import { Large } from "../large";
// import { Medium } from "../medium";
// import { Small } from "../small";
import { Posts } from "../posts";
import styles from "./index.scss";

export const App = () => {
    const data = [
        {
            id: 1,
            image: "https://images.pexels.com/photos/2318990/pexels-photo-2318990.jpeg?cs=srgb&dl=pexels-mithulvarshan-2318990.jpg&fm=jpg",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            date: "2021-12-12",
            lesson_num: 38,
            title: "Who's a Good Boy?",
            author: 'Author'
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1626736637845-53045bb9695b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGN1dGUlMjBkb2d8ZW58MHwxfDB8fHwy",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            date: "2021-12-12",
            lesson_num: 38,
            title: "Who's a Good Boy?",
            author: 'Author'
        },
        {
            id: 3,
            image: "https://st4.depositphotos.com/1031481/28336/i/450/depositphotos_283367336-stock-photo-french-bulldog-puppy-on-background.jpg",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            date: "2021-12-12",
            lesson_num: 38,
            title: "Who's a Good Boy?",
            author: 'Author'
        },
        {
            id: 4,
            image: "https://images.lifestyleasia.com/wp-content/uploads/sites/3/2021/02/28235301/gettyimages_177.d4f73102921.original-500x333.jpg",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            date: "2021-12-12",
            lesson_num: 38,
            title: "Who's a Good Boy?",
            author: 'Author'
        },
        {
            id: 5,
            image: "https://animalhealthcenternh.com/wp-content/uploads/2022/12/radiology-banner.jpg",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            date: "2021-12-12",
            lesson_num: 38,
            title: "Who's a Good Boy?",
            author: 'Author'
        }
    ]

    return (
        <>
            {/* <Large posts={ data } />
            <Medium posts={ data } />
            <Small posts={ data } /> */}
            <Posts posts={ data } />
        </>
    )



}