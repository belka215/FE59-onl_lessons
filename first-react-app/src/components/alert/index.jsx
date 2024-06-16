import styles from './index.scss';

export const Alert = ({ status }) => {
    if (status === 'warning') {
        return (
            <div className="alert alert_orange">
                <div className="alert__logo">
                    <img className='logo' src='https://img.icons8.com/?size=100&id=360&format=png&color=000000' />
                </div>
                <div className="alert__text orange">
                    Lorem, ipsum.
                </div>
                <div className="alert__close-btn">
                    <img className='logo' src='https://img.icons8.com/?size=100&id=AqDEb8mCIrk9&format=png&color=000000' />
                </div>
            </div>
        )
    } else if (status === 'denied') {
        return (
            <div className="alert alert_red">
                <div className="alert__logo">
                    <img className='logo' src='https://img.icons8.com/?size=100&id=63652&format=png&color=000000' />
                </div>
                <div className="alert__text red">
                    Lorem, ipsum.
                </div>
                <div className="alert__close-btn">
                    <img className='logo' src='https://img.icons8.com/?size=100&id=AqDEb8mCIrk9&format=png&color=000000' />
                </div>
            </div>
        )
    } else if (status === 'ok') {
        return (
            <div className="alert alert_green">
                <div className="alert__logo">
                    <img className='logo' src='https://img.icons8.com/?size=100&id=6hF0NcC2cAW6&format=png&color=000000' />
                </div>
                <div className="alert__text green">
                    Lorem, ipsum.
                </div>
                <div className="alert__close-btn">
                    <img className='logo' src='https://img.icons8.com/?size=100&id=AqDEb8mCIrk9&format=png&color=000000' />
                </div>
            </div>
        )
    } else if (status === 'info') {
        return (
            <div className="alert alert_gray">
                <div className="alert__logo">
                    <img className='logo' src='https://img.icons8.com/?size=100&id=77&format=png&color=000000' />
                </div>
                <div className="alert__text gray">
                    Lorem, ipsum.
                </div>
                <div className="alert__close-btn">
                    <img className='logo' src='https://img.icons8.com/?size=100&id=AqDEb8mCIrk9&format=png&color=000000' />
                </div>
            </div>
        )
    }
    else if (status === 'reminder') {
        return (
            <div className="alert alert_blue">
                <div className="alert__logo">
                    <img className='logo' src='https://img.icons8.com/?size=100&id=UrISuywvZAgz&format=png&color=000000' />
                </div>
                <div className="alert__text blue">
                    Lorem, ipsum.
                </div>
                <div className="alert__close-btn">
                    <img className='logo' src='https://img.icons8.com/?size=100&id=AqDEb8mCIrk9&format=png&color=000000' />
                </div>
            </div>
        )
    }
}