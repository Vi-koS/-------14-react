import VECTOR from "../../assets/vector.png";
import ARROW from "../../assets/arrow.png";
import style from "./style.module.css";

const HomeOneMain = () => {
    return (
        <div className={style.container}>
            <span>
                <h6 className={style.h6}>STUNNING PHOTOGRAPHY BY</h6>
                <h2 className={style.h2}>DAMIEN BRAUN</h2>
            </span>
            <img src={VECTOR} className={style.img}/>
            <span className={style.span}>
                <p className={style.p}>LET'S <button className="btn_blue"><img src={ARROW}/></button></p>
                <p className={style.p}>WORK TOGETHER</p>
            </span>
        </div>
    )
}
export default HomeOneMain;