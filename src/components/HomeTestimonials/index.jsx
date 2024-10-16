import BTN from "../../assets/btn.png";
import style from "./style.module.css"
import { NavLink } from "react-router-dom";
import Comments from "../Comments";


const MockComment = [
    {
        id: 1,
        name: "Emily Johnson",
        location: "USA, California",
        rating: 5,
        text: "Damien's photography doesn't just capture moments; it captures emotions. Hes work is simply mesmerizing.",
    },
    {
        id: 2,
        name: "John Smith",
        location: "USA, California",
        rating: 5,
        text: "Damien has an incredible talent for making every event feel effortless, and the results speak for themselves.",
    },
    {
        id: 3,
        name: "Samantha Davis",
        location: "USA, California",
        rating: 5,
        text: "I was blown away by Damien's ability to capture the essence of our wedding day. Hes photographs are our cherished memories.",
    },


];



const HomeTestimonials = () => {
    return (

        <div className={style.container_1} id="Testimonials">
            <div className={style.cont_1}>
                <div >
                    <p className="h6">Testimonials</p>
                    <p className="h2">What My Clients Say</p>
                </div>
                <div className={style.cont_}>
                    <button><img src={BTN} /></button>
                    <NavLink to="/aboutMe">
                        <button className="main-btn">View All Services &rarr;</button>
                    </NavLink>
                </div>
            </div>
            <div className={style.mock}>
                {MockComment.map(comment =>
                    <Comments key={comment.id} comment={comment}  />
                )}
            </div>
        </div>

    );
}

export default HomeTestimonials;
