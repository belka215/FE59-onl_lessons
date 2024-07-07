import { useDispatch } from 'react-redux';
import { REMOVE_IMG_ACTION } from '../../actions'
import styles from './index.scss'


export const ImgModal = ({ img }) => {
    const dispatch = useDispatch()
    const handleCancel = () => {
        dispatch(REMOVE_IMG_ACTION)
    }

    return (
        <div className="img-modal">
            <div className="img-modal__container">
                <div className="img-modal__cancel">
                    <button className="cancel" onClick={handleCancel}></button>
                    <div className="img-modal__image">
                        <img src={img} />
                    </div>
                </div>
            </div>
        </div>
    )
}