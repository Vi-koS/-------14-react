import BTN from "../../assets/btn.png";
import STR from "../../assets/arrow.png";
import GR from "../../assets/Group.png";
import Hs from "../../assets/Hs.png"
import style from "./style.module.css";
import { NavLink } from "react-router-dom";

const HomeServices = () => {
    return (
        <div className={style.container}>

            <div className={style.container_2}>
                <div className={style.cont_1}>
                    <p className="h6">Services</p>
                    <p className="h2">My Photography Services</p>
                </div>
                <div className={style.cont_2}>
                    <button><img src={BTN} /></button>
                    <NavLink to="/services">
                        <button className="main-btn">View All Services &rarr;</button>
                    </NavLink>
                </div>
            </div>
            <div className={style.cont_df}>

                <div className={style.container_3}>
                    <div className={style.cont_3}>
                        <span>Events<button className="btn_blue"><img src={STR} /></button></span>
                        <p className="text">Our event photography service is dedicated to capturing the magic of your special occasions. Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that
                            reflect the emotions of the day.</p>
                    </div>

                    <div className={style.cont_4}>
                        <p className={style.text_1}>Service Highlights</p>
                        <p className={style.text}><img src={GR} />Coverage for weddings, parties, corporate functions, and more.</p>
                        <p className={style.text}><img src={GR} />Skilled photographers who know how to seize the moment.</p>
                        <p className={style.text}><img src={GR} />A mix of candid and posed shots for a comprehensive story.</p>
                        <p className={style.text}><img src={GR} />Quick turnaround for you to relive the day's highlights.</p>
                    </div>

                </div>
                <div className={style.cont_5}>
                    <img src={Hs} />
                </div>

            </div>




        </div>
    );
}

export default HomeServices;