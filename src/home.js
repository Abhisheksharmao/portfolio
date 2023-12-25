import React, { useEffect } from 'react'
import '../src/css/home.css'
import casestudygarden from './garden case study.pptx';
import Aos from 'aos';
import 'aos/dist/aos.css'
import casestudylibrary from './library casestudy.pptx';
import casestudyshoe from './shoes store.pptx';

export default function Home() {
useEffect(()=>{
    Aos.init()
},[])
    return (
        <>
            <div className='home-mt1' >
                <div className="mt1">
                    <h1 style={{ color: "black" }}>I am Abishek Sharma</h1>
                    <h1 style={{ marginLeft: "100px", color: "black" }}>UX designer</h1>
                    <br />
                    <h2 style={{color:"black"}}>Abhisheksh0012@gmail.com</h2>
                </div>
                <div className="mt2">
                    <img src="./img/00e8b4df-5347-4402-9ad7-892ef6ea0f04.jpg" alt=""  />
                </div>
            </div>
            <h1 style={{ color: "black" }}>About me</h1>
            <p style={{ color: "black", fontSize: "20px"}}>I am UX Designer based in India. I value human connection, vulnerability, accesibility ,growth and openess. I enjoy solving difficult human problem thorugh design.when I am not solivng problem you can find be playing video games , learning new software, gaining knowledge as the world is endless so i try to explore different things to get some new experience. </p>

            <br />

            {/* skills */}
            <h1 style={{ color: "black", textAlign: "center" }}>SKILLS</h1>
            <div className="skills" data-aos="fade-up">
                <div className='on' ><img src="./img/download.png" alt="" /> </div>
                <div className='on'><img src="./img/html.png" alt="" />  </div>
                <div className='on'><img src="./img/download (1).png" alt="" />  </div>
                <div className='on'><img src="./img/js.jpg" alt="" />  </div>
                <div className='on'><img src="./img/download.jpg" alt="" />  </div>
                <div className='on'><img src="./img/bs.jpg" alt="" /> </div>
                <div className='on'><img src="./img/unnamed.png" alt="" /> </div>
            </div>
            <br />
            <br />
            <br />





            {/* project */}
            <div className="pl" data-aos="fade-up" data-aos-delay="50"  ><img src="./img/prj.jpg" alt="" /></div>

            <div className="prj" data-aos="fade-up" data-aos-delay="50" >
                <div className="Library">
                    <h2 style={{ color: "black" }} >Find my Library</h2>
                    <a href="https://xd.adobe.com/view/ff341615-31ef-491f-a9a7-e43b17df8669-aa67/"><img src="./img/librar prev.png" alt="" /></a>
                    <br />
                    <a
                        href={casestudylibrary}
                        download="casestudylibrary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button style={{ color: "black" }}><h2>Case study</h2> </button>
                    </a>

                </div>
                <div className="Shoes_store" >
                    <h2 style={{ color: "black" }}>Shoes Store</h2>
                    <a href="https://www.figma.com/proto/cms7pv9Vc8qQfVNtjJZLHQ/nike?page-id=0%3A1&type=design&node-id=1-2&viewport=441%2C295%2C0.27&t=cZY9oB3O1DfSQ2LQ-1&scaling=min-zoom&starting-point-node-id=1%3A2&mode=design"><img src="./img/nike prev.png" alt=""  /></a>
                    <br />
                    <a
                        href={casestudyshoe}
                        download="casestudy shoe store"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button style={{ color: "black" }}><h2>Case study</h2> </button>
                    </a>

                </div>
                <div className="gardner" >
                    <h2 style={{ color: "black" }}>Gardner</h2>
                    <a href="https://xd.adobe.com/view/b27e8218-1d3e-4dfd-b523-056d2a63a425-e72d/?fullscreen"><img src="./img/garden prev .png" alt=""  /></a>
                    <br />
                    <a
                        href={casestudygarden}
                        download="casestudygarden"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button style={{ color: "black" }}><h2>Case study</h2> </button>
                    </a>

                </div>

                <div className="gard_mobile" >
                    <h2 style={{ color: "black" }}>Library</h2>
                    <a href="https://xd.adobe.com/view/5fe52408-ecb1-44fd-be7e-30a720272c6a-0ab6/"><img src="./img/Screenshot_2023-10-27_113151-removebg-preview.png" alt=""  /></a>
                    <br />
                    <a
                        href={casestudylibrary}
                        download="casestudy library"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button style={{ color: "black" }}><h2>Case study</h2> </button>
                    </a>

                </div>

            </div>
            <br />



        </>
    )
}
