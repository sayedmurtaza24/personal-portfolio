import React, { useState } from 'react'
import ProjectSlide from './ProjectSlide'
import { Pagination, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SarafShot1 from '../assets/saraf-screenshot.png'
import SarafShot2 from '../assets/saraf-screenshot-1.png'
import SarafShot3 from '../assets/saraf-screenshot-2.png'
import TrackMateShot1 from '../assets/trackmate-screenshot.png'
import TrackMateShot2 from '../assets/trackmate-screenshot-1.png'
import TrackMateShot3 from '../assets/trackmate-screenshot-2.png'
import TicTacToeShot1 from '../assets/tictactoe-screenshot.png'
import TicTacToeShot2 from '../assets/tictactoe-screenshot-1.png'
import TicTacToeShot3 from '../assets/tictactoe-screenshot-2.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Projects.css'

function Projects() {
    const projects = [{
        name: 'Saraf',
        description: "Saraf is a money exchange and money transfer management system built with VueJS, ExpressJS + NodeJS and PostgreSQL. Some of the main features of the application are user management, accounts management, journal, deposite box, printable receipts, bookmarking, profit/loss report, telegram bot integration, telegram notifications, dark mode, quick search, filtering and lots more...",
        pageLink: 'saraf-app.netlify.app',
        techStack: ['VueJS', 'Express', 'NodeJS', 'PrimeVue', 'PostgreSQL', 'Sequelize', 'JWT', 'AWS', 'Docker'],
        images: [SarafShot1, SarafShot2, SarafShot3],
        accentColor: "#c6d9d2"
    }, {
        name: 'TrackMate',
        description: "TrackMate is a student academic and behavioral tracking system made to make the life of teachers easier and reduce paper work! Build on top of React and NodeJS in two weeks as graduation project in a team it offers many features including student timeline management, multiple class management, class overview, emergency contacts and many more... ",
        pageLink: 'saraf-app.netlify.app',
        techStack: ['React', 'Redux Toolkit', 'NodeJS', 'Express', 'PrimeReact', 'MongoDB', 'Mongoose', 'Google Auth'],
        images: [TrackMateShot1, TrackMateShot2, TrackMateShot3],
        accentColor: "#c5d4e0"
    }, {
        name: 'FancyChat',
        description: "FancyChat is a realtime video calling application with filters made in one day during salt bootcamp using React, Express, P5-React and PeerJS. The Application features user signup and user authentication using JWT, friend management, call log with details, realtime effect selector, responsive UI that works on every device and more...",
        pageLink: 'saraf-app.netlify.app',
        techStack: ['React', 'Redux Toolkit', 'NodeJS', 'Express', 'MongoDB', 'JWT', 'Docker', 'PeerJS', 'P5-React', 'WebRTC', 'GLSL Shaders'],
        images: [],
        accentColor: "#c5c5e0"
    }, {
        name: 'Tic-Tac-Toe',
        description: "Saraf is a money exchange and money transfer management system built with VueJS, ExpressJS + NodeJS and PostgreSQL. Some of the main features of the application are user management, accounts management, journal, deposite box, printable receipts, bookmarking, profit/loss report, telegram bot integration, telegram notifications, dark mode, quick search, filtering and lots more...",
        pageLink: 'saraf-app.netlify.app',
        techStack: ['VueJS', 'ExpressJS', 'NodeJS', 'PrimeVue', 'PostgreSQL', 'Sequelize', 'JWT', 'AWS', 'Docker'],
        images: [TicTacToeShot1, TicTacToeShot2, TicTacToeShot3],
        accentColor: "#e5e5e5"
    }];
    const [bgColor, setBgColor] = useState(projects[0].accentColor);
    return (
        <section className='projects-section' style={{ background: bgColor }}>
            <h1 className='projects-section__title'>Projects</h1>
            <div className='projects-section__centered'>
                <Swiper modules={[Pagination, Mousewheel]}
                    spaceBetween={150}
                    slidesPerView={1}
                    pagination
                    onSlideChange={(slide) => setBgColor(projects[slide.activeIndex].accentColor)}
                    mousewheel={{ sensitivity: .1, forceToAxis: true }}>
                    {projects.map(p => <SwiperSlide key={p.name}><ProjectSlide info={p} /></SwiperSlide>)}
                </Swiper>
            </div>
        </section>
    )
}

export default Projects