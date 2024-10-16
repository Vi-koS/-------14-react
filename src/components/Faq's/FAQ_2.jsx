import BTN_1 from "../../assets/faq1.png";
import BTN from "../../assets/faq.png"
import React, { useState } from "react";
import s from "./style.module.css";


const FAQ_2 = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const questions_2 = [
        {
            question: "What is your editing process like?",
            answer: "lorem"
        },
        {
            question: "Are digital files included in your photography packages?",
            answer: "lorem"
        },
        {
            question: "Do you offer prints of your photographs?",
            answer: "Yes, prints are available for purchase. Explore the 'Prints' section for more details on sizes and pricing."
        },
        {
            question: "How long does it take to receive the edited photos after a session?",
            answer: "lorem"
        },
    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className={s.cont_none}>
            {questions_2.map((item, index) => (
                <div className={s.cont_2} key={index}>
                    <button className={s.btn} onClick={() => handleToggle(index)}>
                        <button>{openIndex === index ? (<img src={BTN_1} />) : (<img src={BTN} />)}</button>
                        {item.question}</button>
                    {openIndex === index && (
                        <p className={s.answer}>{item.answer} {index}</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQ_2;
