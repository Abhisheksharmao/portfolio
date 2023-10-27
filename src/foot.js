import React, { useEffect } from 'react'
import './css/foot.css'
import Aos from 'aos';
import 'aos/dist/aos.css'


export default function Foot() {
useEffect(()=>{
    Aos.init()
},[])
    return (
        <>
            <div className='cc' data-aos="fade-up">
                <h1 style={{color:"white", margin:"20px"}}>Contact Me</h1>
                <div className="con">
                    <div className="so" >
                    <a href="https://www.instagram.com/abhishek.0199/?igshid=MWZjMTM2ODFkZg%3D%3D"><img src=".\img\icons8-instagram-96.png" width="60px" alt="" /></a>
                    <a href="https://github.com/Abhisheksharmao"><img src=".\img\icons8-github-96.png" width="60px" alt="" /></a>
                    <a href="https://www.linkedin.com/in/abhishek098"><img src=".\img\icons8-linkedin-96.png" width="60px" alt="" /></a>
                    </div>
                    <div className="sum" style={{fontSize:"10px", color:"white"}} >
                        <h1>Thank you for visiting my website . lets connect together 
                            <br /> abhisheksh0012@gmail.com
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}
