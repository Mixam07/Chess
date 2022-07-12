import s from './Chess.module.css';
import MainContainer from "./Main/MainContainer";
import PopupEndContainer from "./PopupEnd/PopupEndContainer";
import PopupСhangeContainer from './PopupСhange/PopupChangeContainer';

const Chess = () => {
    return (
        <>
            <PopupEndContainer />
            <PopupСhangeContainer />
            <div className={s.container}>
                <MainContainer />
            </div>
        </>
    )
}

export default Chess;