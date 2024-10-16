import FS from "../../assets/fs.png";
import IN from "../../assets/in.png";
import TW from "../../assets/tw.png";
import STARS from "../../assets/stars.png";
import s from "./style.module.css";



const Comments = ({comment}) => {
    
    return (
        <div className={s.container}>
            <div className={s.cont_1}>
                <div className={s.cont_2}>
                    <p className={s.name}>{comment.name}</p>
                    <p className={s.ad}>{comment.location}</p>
                </div>
                <div className={s.cont_3}>
                    <button><img src={FS} alt="" /></button>
                    <button><img src={TW} alt="" /></button>
                    <button><img src={IN} alt="" /></button>
                </div>
            </div>
            <div className={s.star}><img src={STARS} /></div>
            <div className={s.cont_4}>
                <p className={s.text}>{comment.text}</p>
            </div>
        </div>
    );
}

export default Comments;