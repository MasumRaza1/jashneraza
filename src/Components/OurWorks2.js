// import React, { useState } from "react";
// import Slider from "react-slick";
// import Modal from "react-modal";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../Styles/ourWorks2.css"; 

// const worksData = [
//   { image: `${process.env.PUBLIC_URL}/works_img/work6.jpg`, title: "Notable Guests Attended", description: "Various personalities joined FR Society’s COVID-19 relief efforts." },
//   { video: `${process.env.PUBLIC_URL}/works_img/video.mp4`, title: "Glimpses of Helping", description: "FR Society provided crucial aid to migrants during COVID-19." },
//   { image: `${process.env.PUBLIC_URL}/works_img/work5.jpg`, title: "Relief for Migrant Laborers", description: "FR Society provided crucial aid to migrants during COVID-19." },
//   { image: `${process.env.PUBLIC_URL}/works_img/work4.jpg`, title: "Helping Migrant Workers", description: "FR Society distributed food, water, and essentials during COVID-19." },
//   { image: `${process.env.PUBLIC_URL}/works_img/work7.jpg`, title: "Felicitation Ceremony", description: "FR Society honored volunteers & members with certificates and IDs." },
//   { image: `${process.env.PUBLIC_URL}/works_img/fr_news.png`, title: "Featured in Newspaper", description: "FR Society Featured in Newspaper" },
// ];


// const CustomPrevArrow = ({ onClick }) => <button className="custom-arrow custom-prev" onClick={onClick}>‹</button>;
// const CustomNextArrow = ({ onClick }) => <button className="custom-arrow custom-next" onClick={onClick}>›</button>;

// function Works() {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const openModal = (index) => {
//     setCurrentIndex(index);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % worksData.length);
//   };

//   const goToPrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + worksData.length) % worksData.length);
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     nextArrow: <CustomNextArrow />,
//     prevArrow: <CustomPrevArrow />,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 768, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <div className="ourworks-container">
//       <h2 className="ourworks-title"><span>Our Works</span></h2>
//       <p className="ourworks-description">Here are some of our past projects and contributions towards the community.</p>
      
//       <Slider {...settings}>
//         {worksData.map((work, index) => (
//           <div key={index} className="work-card" onClick={() => openModal(index)}>
//             {work.video ? (
//               <video 
//                 className="work-video"
//                 src={work.video}
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//               />
//             ) : (
//               <img className="work-image" src={work.image} alt={work.title} />
//             )}
//             <h3 className="work-title">{work.title}</h3>
//             <p className="work-description">{work.description}</p>
//           </div>
//         ))}
//       </Slider>

//       {/* Modal for Larger View */}
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         className="image-modal"
//         overlayClassName="overlay"
//         ariaHideApp={false}
//       >
//         {/* Close Button */}
//         <button className="close-btn" onClick={closeModal}>✖</button>

//         {/* Navigation Arrows */}
//         <button className="modal-arrow modal-prev" onClick={goToPrev}>‹</button>

//         {/* Display Image or Video in Modal */}
//         {worksData[currentIndex]?.video ? (
//           <video className="modal-video" src={worksData[currentIndex].video} controls autoPlay />
//         ) : (
//           <img className="modal-image" src={worksData[currentIndex]?.image} alt={worksData[currentIndex]?.title} />
//         )}
        
//         <button className="modal-arrow modal-next" onClick={goToNext}>›</button>
//       </Modal>
//     </div>
//   );
// }

// export default Works;

import React from "react";
// import "../Styles/ourWorks2.css";
import "../Styles/ourWorks2tem.css"; 
 // Assuming this still applies to your styles

const worksData = [
  { image: "/works_img/work6.jpg", title: "Notable Guests Attended", description: "Various personalities joined FR Society’s COVID-19 relief efforts." },
  { video: "/works_img/video.mp4", title: "Glimpses of Helping", description: "FR Society provided crucial aid to migrants during COVID-19." },
  { image: "/works_img/work5.jpg", title: "Relief for Migrant Laborers", description: "FR Society provided crucial aid to migrants during COVID-19." },
  { image: "/works_img/work4.jpg", title: "Helping Migrant Workers", description: "FR Society distributed food, water, and essentials during COVID-19." },
  { image: "/works_img/work7.jpg", title: "Felicitation Ceremony", description: "FR Society honored volunteers & members with certificates and IDs." },
  { image: "/works_img/fr_news.png", title: "Featured in Newspaper", description: "FR Society Featured in Newspaper" },
];

function Works() {
  return (
    <div className="ourworks-container">
      <h2 className="ourworks-title"><span>Our Works</span></h2>
      <p className="ourworks-description">Here are some of our past projects and contributions towards the community.</p>

      <div className="works-grid">
        {worksData.map((work, index) => (
          <div key={index} className="work-card">
            {work.video ? (
              <video 
                className="work-video"
                src={work.video}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img className="work-image" src={work.image} alt={work.title} />
            )}
            <h3 className="work-title">{work.title}</h3>
            <p className="work-description">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;
