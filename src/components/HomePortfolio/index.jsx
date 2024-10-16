import BTN from "../../assets/btn.png";
import style from "./style.module.css";
import Card from "../HomePorfolioCards";
import { NavLink } from "react-router-dom";



const MockCard = [
    {
        id: 1,
        img: "/src/assets/Card1.png",
        name: "Faces of Resilience",
        date: "March 2022",
    },
    {
        id: 2,
        img: "/src/assets/Card2.png",
        name: "A Wedding Tale",
        date: "January 2020",
    },
    {
        id: 3,
        img: "/src/assets/Card3.png",
        name: "Product Elegance",
        date: "January 2020",
    },
];

const HomePortfolio = () => {
    return (
        <div className={style.container_1} id="MyWorks">
            <div className={style.container_2}>
                <div className={style.cont_1}>
                    <div >
                        <p className="h6">Portfolio</p>
                        <p className="h2">Explore My photography work.</p>
                    </div>
                    <div className={style.cont_}>
                        <button><img src={BTN} /></button>
                        <NavLink to="/porfolio">
                            <button className="main-btn">View All Services &rarr;</button>
                        </NavLink>
                    </div>

                </div>


                <div>

                </div>

                <div className={style.cont_2}>
                    {
                        MockCard.map(card =>
                            <Card key={card.id} card={card} />
                        )
                    }
                </div>
            </div>

            <div>
            </div>

        </div>


    );
}

export default HomePortfolio;