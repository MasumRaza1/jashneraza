import React from "react";
import "../Styles/Events.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const Events = () => {
    const events = [
        {
            title: "Quran Learning Session",
            description: "A special class on Quranic recitation and Tajweed rules for all age groups.",
            date: "March 10, 2025",
            location: "Faizan-e-Raza Institute, Rehla",
            image: "https://www.darulmadinah.net/wp-content/uploads/2016/06/319539000_931064461556468_3492104286128750429_n.jpg",
        },
        {
            title: "Iftar Distribution during Ramadan",
            description: "Distributing iftar meals to underprivileged families during the holy month.",
            date: "March 25, 2025",
            location: "FR Society, Rehla",
            image: "https://media.gettyimages.com/id/2084788047/photo/kolkata-west-bengal-india-muslim-people-break-their-day-long-fasting-and-have-their-iftar.jpg?s=612x612&w=gi&k=20&c=srmzyePWWcro4Emsaxg9r6dZhLb4p2YI2wLhl7nGe3A=",
        },
        {
            title: "Charity Health Camp",
            description: "Free health check-ups and consultations for underprivileged individuals.",
            date: "April 5, 2025",
            location: "Shifa-e-Raza Health Center, Jharkhand",
            image: "https://media.gettyimages.com/id/1680653991/photo/a-female-doctor-conducting-a-thorough-examination-of-a-child-during-a-rural-health-care-camp.jpg?s=612x612&w=gi&k=20&c=_BW-tX1dLrr5W-O1lOqQmyPw62nunutHmw6tJx1mYns=",
        },
        {
            title: "Eid Gift Distribution for Poor Families",
            description: "Providing essential gifts and clothing to needy families for Eid celebrations.",
            date: "April 20, 2025",
            location: "FR Society, Rehla",
            image: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG92ZXJ0eSUyMGluJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D",
        },
        {
            title: "Jashn-e-Raza Celebration",
            description: "Annual event to celebrate Islamic heritage with scholars and Nasheed performances.",
            date: "May 20, 2025",
            location: "FR Society Auditorium, Rehla",
            image: "https://source.unsplash.com/500x300/?celebration,festival",
        },
        {
            title: "Kids' Competitions (Quran Tilawat, Naat, Essay Writing)",
            description: "A platform for kids to showcase their talents in Islamic knowledge and arts.",
            date: "May 25, 2025",
            location: "Faizan-e-Raza Institute, Rehla",
            image: "https://www.darulmadinah.net/wp-content/uploads/2023/12/dm0123.jpeg",
        },
        {
            title: "Islamic Literature Exhibition",
            description: "Showcasing books, manuscripts, and digital literature of Ala Hazrat.",
            date: "June 15, 2025",
            location: "Kalam-e-Raza Library, Rehla",
            image: "https://i.ytimg.com/vi/CAzU7A4vx7U/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-DoACuAiKAgwIABABGGUgYShbMA8=&rs=AOn4CLB53m4ME-H29XvRHI8HMLbKnrLvmA",
        },
        {
            title: "Urs-e-Ala Hazrat (Badi Shaan Se Manaya Jayega)",
            description: "A grand event commemorating the Urs of Ala Hazrat with religious gatherings and speeches.",
            date: "July 10, 2025",
            location: "Faizan-e-Raza Institute, Rehla",
            image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/d339f9105490899.5f7aba9513d8a.jpg",
        },
        {
            title: "Independence Day Celebration with Dua-e-Khair",
            description: "Commemorating Independence Day with prayers for national peace and prosperity.",
            date: "August 15, 2025",
            location: "FR Society, Rehla",
            image: "https://media.istockphoto.com/id/1280308071/photo/little-indian-school-boy-jumping-in-sky-with-tri-color-balloons-and-celebrating-independence.jpg?s=612x612&w=0&k=20&c=r-ZXlkyhJ0ceOn1waG4J1OENE29LPIYs19IhA5IWobk=",
        },
        {
            title: "Health Check-up Camp (Free)",
            description: "A free medical camp offering health consultations and tests.",
            date: "September 12, 2025",
            location: "Shifa-e-Raza Health Center, Jharkhand",
            image: "https://media.gettyimages.com/id/1680653991/photo/a-female-doctor-conducting-a-thorough-examination-of-a-child-during-a-rural-health-care-camp.jpg?s=612x612&w=gi&k=20&c=_BW-tX1dLrr5W-O1lOqQmyPw62nunutHmw6tJx1mYns=",
        },
        {
            title: "Educational Seminar for Youth and Women",
            description: "A seminar focusing on education and empowerment for the youth and women.",
            date: "October 5, 2025",
            location: "FR Society Auditorium, Rehla",
            image: "https://source.unsplash.com/500x300/?seminar,education",
        },
        {
            title: "Langar-e-Aam (Food Distribution)",
            description: "Free food distribution for the needy and underprivileged.",
            date: "November 20, 2025",
            location: "FR Society, Rehla",
            image: "https://source.unsplash.com/500x300/?food,distribution",
        },
        {
            title: "Annual Day (Special Programs & Awards)",
            description: "A grand event celebrating the achievements of the year with awards and performances.",
            date: "December 25, 2025",
            location: "FR Society Auditorium, Rehla",
            image: "https://source.unsplash.com/500x300/?awards,ceremony",
        }
    ];
    

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // 3 cards on desktop
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024, // Tablets
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768, // Mobile
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="events-section">
            <div className="events-container">
                <h2 className="events-title">Upcoming Events</h2>
                <p className="events-description">
                    Stay updated with our upcoming programs and social welfare initiatives.
                </p>
                <Slider {...settings} className="events-carousel">
                    {events.map((event, index) => (
                        <div key={index} className="event-card">
                            <img src={event.image} alt={event.title} className="event-image" />
                            <div className="event-details">
                                <h3 className="event-title">{event.title}</h3>
                                <p className="event-description">{event.description}</p>
                                <div className="event-meta">
                                    <span className="event-date"><FaCalendarAlt /> {event.date}</span>
                                    <span className="event-location"><FaMapMarkerAlt /> {event.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Events;
