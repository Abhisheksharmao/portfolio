import React from 'react'
import './main.css'
export default function Main() {


    return (
        <>
            <div className='photo'>
                <img src="./img/photo.jpg" alt="" className='ph' />
                <div className='social'>
                    <a href="https://github.com/Abhisheksharmao"><img src="./img/icons8-github-96.png" alt="" style={{ width: "50px" }} /></a>
                    <a href="https://www.instagram.com/abhishek.0199/?igshid=MWZjMTM2ODFkZg%3D%3D"><img src="./img/icons8-instagram-96.png" alt="" style={{ width: "50px" }} /></a>
                    <a href="https://www.linkedin.com/in/abhishek098"><img src="./img/icons8-linkedin-96.png" alt="" style={{ width: "50px" }} /></a>
                </div>
            </div>
            <div className="con">
                <div className="card">
                    <img src="./img/calculator.png" className="cardey" alt="..." />
                    <p className="card-text">Calculator <br /> Basic calculator formed using Java script to perform basic operations like add , multiply , devide , subtract etc <br /> Library - ReactJS</p>
                </div>
                <div className="card">
                    <img src="./img/amazon_logo._CB633266945_.png" className="cardey" alt="..." />
                    <p className="card-text">Amazon clone <br /> It is an amazon clone which consist og basic feature like to view product available and more..</p>
                </div>
                <div className="card">
                    <img src="./img/tick.png" alt="" className="cardey" />
                    <p className="card-text">Tick tack toe Game <br /> This game is made for fun using javascript where we can play and proceed towards a winner of the game.</p>
                </div>
                <div className="card">
                    <img src="./img/cycle.png" className="cardey" alt="..." />
                    <p className="card-text">Cycle store <br /> This website brings the new concept of making the customer able to purchase the desired bicycle of its choice. <br /> Library used - ReactJs</p>
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
                    </div>
                </div>


                <div className="exp">
                    <h1>Experience</h1>
                    <div>
                        <h1>* Prodigy Infotech - current</h1>
                        <p>position - Web Developer</p>
                        <p>Responsibility</p>
                        <ul>
                            <li>write clean and managable codes for developing the websites</li>
                            <li>Working on Task assigned.</li>
                        </ul>
                    </div>
                    <div>
                        <h1>* Azure</h1>
                        <p>position - Front End Developer</p>
                        <ul>
                            <p>Responsibility</p>
                            <li>Maintaning the frameworks</li>
                            <li>Collaboration with other</li>
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
