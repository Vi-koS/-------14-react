import FAQ_1  from "../../components/Faq's/FAQ.jsx"
import FAQ_2  from "../../components/Faq's/FAQ_2.jsx"

import s from "./style.module.css"

const HomeFAQs = () => {
    return (
        <div className={s.section}>
            <div className={s.cont_1}>
                <p className="h6">FAQ’s</p>
                <p className="h2">Frequently Asked Questions</p>
            </div>
            <div className={s.cont_faq}>
                <FAQ_1 />
            </div>
            <div className={s.cont_faq}>
                <FAQ_2 />
            </div>

        </div>
    );
}

export default HomeFAQs;