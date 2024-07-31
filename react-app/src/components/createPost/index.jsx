import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SignIn } from "../signIn";
import ImageUploading from "react-images-uploading";
import Validator from "fastest-validator";
import styles from "./index.scss";
import { createPost } from "../../api/posts";

const validationSchema = {
    title: {
        type: "string",
        min: 1,
        messages: {
            stringMin: "Title is too short",
        },
    },
    lesson_num: { type: "string", min: 1 },
    description: { type: "string", min: 1 },
    text: { type: "string", min: 1 },
};

const checkValidationData = (data) => {
    const validator = new Validator();
    const check = validator.compile(validationSchema);

    return check(data);
};

export const CreatePost = ({ setIsShowModal }) => {
    const isAuth = localStorage.getItem('isAuth');
    const navigate = useNavigate();
    const [images, setImages] = useState([]);
    const [errors, setErrors] = useState({});

    const goHome = () => {
        navigate('/');
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const { title, lesson_num, description, text } = event.currentTarget;

        const result = checkValidationData({
            title: title.value,
            lesson_num: lesson_num.value,
            description: description.value,
            text: text.value,
        });

        if (result === true) {
            const data = new FormData(event.currentTarget);

            data.append("image", images[0]?.file);

            createPost(data)
        } else {
            setErrors(result.reduce((result, { field, message }) => ({
                ...result,
                [field]: message
            }), {}))
        }


    }

    const handleChangeImage = (imagesList) => {
        setImages(imagesList);
    };

    if (isAuth) {
        return (
            <section className="create-post">
                <div className="wrapper">
                    <button onClick={goHome}>Home</button>
                    <h1 className="create-post__title">Add Post</h1>
                    <form className="create-post__form" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="title" className="create-post__label">Title</label>
                            <input
                                type="text"
                                label="Title"
                                name="title"
                                className="input"
                            />
                            {errors.title ? (<span className="create-post__error">{errors.title}</span>) : null}
                        </div>
                        <div className="small-input-container">
                            <div className="input-area">
                                <label htmlFor="lesson_num" className="create-post__label">Lesson number</label>
                                <input
                                    type="text"
                                    label="Lesson number"
                                    name="lesson_num"
                                    className="create-post__input"
                                />
                                {errors.lesson_num ? (<span className="create-post__error">{errors.lesson_num}</span>) : null}
                            </div>
                            <div className="input-area">
                                <ImageUploading
                                    value={images}
                                    onChange={handleChangeImage}
                                >
                                    {({
                                        imageList,
                                        onImageUpload,
                                        onImageRemoveAll,
                                        onImageUpdate,
                                        onImageRemove,
                                    }) => (
                                        <div className="input-area">
                                            <p className="create-post__label">Image</p>
                                            <input
                                                className="create-post__form__btns__item grey-btn"
                                                onClick={onImageUpload}
                                                type="button"
                                                value='Upload new'
                                            />
                                            &nbsp;
                                            {imageList.map((image, index) => (
                                                <div key={index} className="image-item">
                                                    <img src={image.dataURL} alt="" width="100" />
                                                    <div className="image-item__btn-wrapper">
                                                        <button onClick={() => onImageUpdate(index)}>Update</button>
                                                        <button onClick={() => onImageRemove(index)}>Remove</button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </ImageUploading>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="description" className="create-post__label">Description</label>
                            <textarea
                                label="Text"
                                placeholder="Description"
                                name="description"
                                className="input"
                            />
                            {errors.description ? (<span className="create-post__error">{errors.description}</span>) : null}
                        </div>
                        <div>
                            <label htmlFor="text" className="create-post__label">Text</label>
                            <textarea
                                label="Text"
                                placeholder="Text"
                                name="text"
                                className="input"
                            />
                            {errors.text ? (<span className="create-post__error">{errors.text}</span>) : null}
                        </div>
                        <div className="create-post__form__btns">
                            <input type="reset" value='Cancel' className="create-post__form__btns__item grey-btn" />
                            <input type="submit" value='Add Post' className="create-post__form__btns__item purple-btn" />
                        </div>
                    </form>
                </div>
            </section>
        )
    } else {
        return (
            <SignIn setIsShowModal={setIsShowModal} />
        )
    }
}