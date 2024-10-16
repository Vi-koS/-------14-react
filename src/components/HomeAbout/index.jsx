import IMG_home from "../../assets/imgAboutHome.png";
import ICON_home from "../../assets/IconHomeAbout.png";
import FS from "../../assets/fs.png";
import IN from "../../assets/in.png";
import TW from "../../assets/tw.png";
import style from "./style.module.css";
import { NavLink } from "react-router-dom";



const HomeAbout = () => {

    return (
        <div className={style.container} id="aboutMe">
            <div className={style.container_2}>
                <div className={style.cont_1}>
                    <p className={style.pAbout}>About</p>
                    <p className={style.pName}>I am Damien</p>
                </div>
                <div className={style.cont_2}>
                    <NavLink to="/aboutMe">
                        <button className="main-btn">Know More &rarr;</button>
                    </NavLink>

                </div>
            </div>
            <div className={style.container_3}>
                <div className={style.cont_img}>
                    <img src={IMG_home} />
                </div>
                <div className={style.container_4}>
                    <div className={style.intro}>
                        <p className={style.pIn}><img src={ICON_home} />Introduction</p>
                        <p className="text">My journey as a photographer has been a lifelong quest to capture the extraordinary in the ordinary, to freeze fleeting moments in time, and to share the world's beauty as I see it. Based in the enchanting landscapes of the USA, I find inspiration in every corner of this diverse and vibrant country. Join me as we embark on a visual odyssey, where each photograph tells a story, and every frame is a piece of my heart.</p>
                    </div>
                    <div className={style.container_5}>
                        <p className={style.pIn}><img src={ICON_home} />Contact Information</p>
                        <div className={style.cont_email}>
                            <div className={style.email}>
                                <address>
                                    <p>Email</p>
                                    <a href="mailto:damienbraun@gmail.com">damienbraun@gmail.com</a>
                                </address>
                            </div>
                            <div className={style.email}>
                                <address>
                                    <p>Phone Number</p>
                                    <a href="tel:+00 000000000">+00 000000000</a>
                                </address>

                            </div>
                        </div>
                        <div className={style.container_6}>
                            <div className={style.three}>
                                <button><img src={FS} /></button>
                                <button><img src={TW} /></button>
                                <button><img src={IN} /></button>
                            </div>
                            <div className={style.two}>
                                <button className="main-btn">Let’s Work</button>
                                <button className="main-btn">Download CV</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>









        </div>
    );
}

export default HomeAbout;