import React from 'react'
import './main.css'
export default function Main() {

    return (
        <>
            <div className='wrappertop'>
                <div className='typewriter'>
                    <h1>Hi my name is</h1>
                    <div className='typing-demo'>
                        <h1 >Abhishek Sharma</h1>
                    </div>
                    <h2 style={{ marginTop: "40px" }}>Front-end Developer</h2>
                </div>
                <div className='photo'>
                    <img src="./img/photo.jpg" alt="" className='ph' />
                    <div className='social'>
                        <a href="https://github.com/Abhisheksharmao"><img src="./img/icons8-github-96.png" alt="" style={{ width: "50px" }} /></a>
                        <a href="https://www.instagram.com/abhishek.0199/?igshid=MWZjMTM2ODFkZg%3D%3D"><img src="./img/icons8-instagram-96.png" alt="" style={{ width: "50px" }} /></a>
                        <a href="https://www.linkedin.com/in/abhishek098"><img src="./img/icons8-linkedin-96.png" alt="" style={{ width: "50px" }} /></a>
                    </div>
                </div>
            </div>
            <div className='aboutme'>
                <h1>About Me</h1>
                <h3>I am passionate front-end developer with strong skill set in design and problem solving . Proficient in HTML,CSS,Javascript,React.js,Redux Toolkit. I excel in writing clean code and optimizing performance . I am dept at collaboration in team environments . I am enthusiastic about leveraging frameworks like React.js to build dynamic web application . As a motivated professional , I bring combination of creativity and technical expertise to deliver exceptional front-end solutions.</h3>
            </div>
            <div className="con">
                <div className="card">
                    <img src="./img/canva-purple-minimalist-modern-music-instagram-post-Uh4QQbhRJgs.jpg" className="cardey" alt="..." />
                    <p className="card-text">Music Player <br /> A music player with variety of features build for the music lover to listen to songs. <br /> Framework used - ReactJS</p>
                    <a href="https://github.com/Abhisheksharmao/Music-Player">Link to repo</a>
                </div>
                <div className="card">
                    <img src="./img/tick.png" className="cardey" alt="..." />
                    <p className="card-text">Tick Tack toe <br /> It's an amazing game made for the fun purpose and to bring the paper game into the electronic form.</p>
                    <a href="https://github.com/Abhisheksharmao/Tick-tack-toe">Link to repo</a>
                </div>
                <div className="card">
                    <img src="./img/download.jpg" alt="" className="cardey" />
                    <p className="card-text">Omi Chat <br /> Real-time Messaging: Implemented WebSocket technology to enable instant message delivery, ensuring users can engage in real-time conversations.</p>
                    <a href="https://github.com/Abhisheksharmao/Omichat">Link to repo</a>
                </div>
                <div className="card">
                    <img src="./img/Screenshot (147).png" className="cardey" alt="..." />
                    <p className="card-text">Blogging Website <br /> This website brings the features of creating and reading the blog created by the user<br /> Framework used - ReactJs</p>
                    <a href="https://github.com/Abhisheksharmao/Digimar">Link to repo</a>
                </div>
            </div>


            <div className="cont">
                <div className="skills " >
                    <h1>Technical skills</h1>
                    <div className="boom">
                        <p className='m' style={{ border: "2px solid silver", borderRadius: "10px " }}>Html</p>
                        <p className='m' style={{ border: "2px solid silver", borderRadius: "10px " }}>Css</p>
                        <p className='m' style={{ border: "2px solid silver", borderRadius: "10px " }}>Javascript</p>
                        <p className='m' style={{ border: "2px solid silver", borderRadius: "10px " }}>Reactjs</p>
                        <p className='m' style={{ border: "2px solid silver", borderRadius: "10px " }}>Bootstrap</p>
                        <p className='m' style={{ border: "2px solid silver", borderRadius: "10px " }}>NextJS</p>
                        <p className='m' style={{ border: "2px solid silver", borderRadius: "10px " }}>Redux</p>
                    </div>
                </div>


                <div className="exp">
                    <h1>Experience</h1>
                    <div className='exp1'>
                        <h1>* Vritech Software IT service</h1>
                        <p>position - Web Developer</p>
                        <p>Responsibility</p>
                        <ul>
                            <li>Developed and Maintained user-facing website using html , css , javascript , ReactJS.</li>
                            <li>Implemented responsive design principles to ensure cross platform compatibility of webpage.</li>
                        </ul>
                    </div>
                    <div className='exp2'>
                        <h1>* Prodigy Infotech</h1>
                        <p>position - Front End Developer</p>
                        <ul>
                            <p>Responsibility</p>
                            <li>Using markup languages like HTML to create user-friendly web pages.</li>
                            <li>Maintaining and improving website
                                Optimizing applications for maximum speed.</li>
                        </ul>
                    </div>
                </div>
                <div className="ki">
                    <h1>Certification</h1>
                    <h3>Reactjs - Mind Luster</h3>
                    <h3>Ux design - Google Coursera</h3>
                </div>


                <div className='side_projects'>
                    <h1>Side_projects</h1>
                    <p className='m' style={{ border: "2px solid silver", borderRadius: "10px " }}>3d Card</p>
                    <p className='m' style={{ border: "2px solid silver", borderRadius: "10px " }}>Whiteboard</p>
                    <p className='m' style={{ border: "2px solid silver", borderRadius: "10px " }}>Login Pages</p>
                    <p className='m' style={{ border: "2px solid silver", borderRadius: "10px " }}>Eye Mouse tracker</p>
                    <p className='m' style={{ border: "2px solid silver", borderRadius: "10px " }}>Car Renting</p>
                    <p className='m' style={{ border: "2px solid silver", borderRadius: "10px " }}>Thala for a reason</p>
                </div>
            </div>


            <div className="ed">
                <h1>Education</h1>
                <h2>United Group of Institution</h2>
                <h3>Bachelor of Business Administration</h3>
                <p>2021 - 2024</p>
            </div>

        </>
    )
}
