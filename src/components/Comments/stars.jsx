
// const Star = ({ name, location, rating }) => {
//     const renderStars = (rating) => {
//         const stars = [];
//         for (let i = 1; i <= 5; i++) {
//             stars.push(
//                 <span key={i} className={
//                     i <= rating ? 'star filled' : 'star'}>★</span>
//             );
//         }
//         return stars;
//     };
//     return (
//         <div className={s.container}>
//             <div className={s.cont_1}>
//                 <div className={s.cont_2}>
//                     <p className={s.name}>{comment.name}</p>
//                     <p className={s.ad}>{comment.location}</p>
//                 </div>
//                 <div className={s.cont_3}>
//                     <button><img src={FS} alt="" /></button>
//                     <button><img src={TW} alt="" /></button>
//                     <button><img src={IN} alt="" /></button>
//                 </div>
//             </div>
//             <div className={s.star}>{renderStars(comment.rating)}</div>
//             <div className={s.cont_4}>
//                 <p className={s.text}>{comment.text}</p>
//             </div>
//         </div>

//     )
// }

// export default Star;