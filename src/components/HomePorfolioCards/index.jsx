import BTN from "../../assets/Arrow.png";
import s from "./style.module.css";
import { NavLink } from "react-router-dom";


const Card = ({ card }) => {
    return (
        <div className={s.container}>
            <div className={s.Card}>
                <div>
                    <img src={card.img} />
                </div>
                <div className={s.cont_btn}>
                    <div>
                        <strong className={s.name}>{card.name}</strong>
                        <p className={s.data}>{card.date}</p>
                    </div>
                    <div>
                        <NavLink to="/portfolio">
                            <button className={s.btn}>View Project <img src={BTN} /></button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;