import FOO from "../../assets/foot.png";
import STAR from "../../assets/Group.png";
import ARROW from "../../assets/arrow.png";
import FL from "../../assets/fleft.png";
import FR from "../../assets/fr.png";
import FS from "../../assets/fs.png";
import IN from "../../assets/in.png";
import TW from "../../assets/tw.png";

import s from "./style.module.css";


const Footer = () => {
    return (
        <div className={s.container}>
            <div className={s.foo}><img src={FOO} /></div>
            <div className={s.section}>
                <div className={s.text}>
                    <img src={STAR} />Event Photography
                    <img src={STAR} />Comercial Photography
                    <img src={STAR} />Product Photography
                    <img src={STAR} />Wedding Photography
                    <img src={STAR} />Landscape Photography
                    <img src={STAR} />Branding Photography
                    <img src={STAR} />Portrait  Photography
                    <img src={STAR} />Event Photography
                    <img src={STAR} />Comercial Photography
                    <img src={STAR} />Product Photography
                    <img src={STAR} />Wedding Photography
                    <img src={STAR} />Landscape Photography
                    <img src={STAR} />Branding Photography
                    <img src={STAR} />Portrait  Photography
                    <img src={STAR} />Event Photography
                    <img src={STAR} />Comercial Photography
                    <img src={STAR} />Product Photography
                    <img src={STAR} />Wedding Photography
                    <img src={STAR} />Landscape Photography
                    <img src={STAR} />Branding Photography
                    <img src={STAR} />Portrait  Photography
                </div>

            </div>
            <div className={s.container_2}>
                <img src={FL} className={s.img} />
                <div className={s.cont_1}>
                    <p className={s.cont_p}>A more meaningful home for photography</p>
                    <span className={s.span}>
                        <p className={s.btn}>LET'S <button className="btn_blue"><img src={ARROW} /></button></p>
                        <p className={s.btn}>WORK TOGETHER</p>
                    </span>
                </div>
                <div className={s.container_3}>
                    <div className={s.cont}>
                        <p className={s.p}>Home</p>
                        <a href="#aboutMe" className={s.a}>About Me</a>
                        <a href="#MyWorks" className={s.a}>My Works</a>
                        <a href="#Testimonials" className={s.a}>Testimonials</a>
                    </div>
                    <div className={s.cont}>
                        <p className={s.p}>Clients</p>
                        <a href="" className={s.a}>Klovesto</a>
                        <a href="" className={s.a}>Nukeway</a>
                        <a href="" className={s.a}>Cloven’s</a>
                        <a href="" className={s.a}>MenVol</a>
                    </div>
                    <div className={s.cont}>
                        <p className={s.p}>Portfolio</p>
                        <a href="" className={s.a}>Events</a>
                        <a href="" className={s.a}>Portrait</a>
                        <a href="" className={s.a}>Branding</a>
                        <a href="" className={s.a}>Commerciale</a>
                        <a href="" className={s.a}>Wedding</a>
                    </div>
                    <div className={s.cont}>
                        <p className={s.p}>Services</p>
                        <a href="" className={s.a}>Portraits</a>
                        <a href="" className={s.a}>Events</a>
                        <a href="" className={s.a}>Commercial </a>
                    </div>
                </div>
                <img src={FR} className={s.img}/>
            </div>
            <div className={s.container_4}>
                <div className={s.cont_2}>
                    <p className={s.left}>Terms & Conditions</p>
                    <p className={s.right}>Privacy Policy</p>
                </div>
                <div className={s.three}>
                    <button><img src={FS} alt="" /></button>
                    <button><img src={TW} alt="" /></button>
                    <button><img src={IN} alt="" /></button>
                </div>
                <div className={s.cont_2}>
                    <p>&copy 2024 Damien Braun Photography. All rights reserved.</p>
                </div>
            </div>

        </div>
    );
}

export default Footer;