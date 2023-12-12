
import { Link } from "react-router-dom";
import img from "../assets/img/nisma.jpg";
import resume from "../assets/img/Nisma-Hossain-Resume.pdf";
// import { gsap } from "gsap";
// import { useEffect } from "react";
import 'animate.css';
import { MdOutlineFileDownload } from "react-icons/md";

const Banner = () => {
    

    
   

    return (
        <div>
            <div className="
            banner
            grid grid-cols-1 lg:grid-cols-2">
            <div>
                <img src={img} alt="Nisma" className="w-3/4 border-spacing-2
                border-1 border-black rounded-full shadow-2xl 
                animate__animated animate__fadeInLeft
                hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
                " />
            </div>
            <div className="my-auto
            italic
            animate__animated animate__fadeInRight
            
            ">
                <h1 className="text-5xl
                mb-4
                 font-bold text-center">Hey There</h1>
                <h2 className="text-2xl 
                mb-4
                font-semibold text-center">
                   My name is
                   <br />
                    Nisma Hossain.
                </h2>
                <h3 className="text-xl
                mb-2
                 text-center">
                    I am a full stack web developer. I love to code and learn new things.
                </h3>
                <div className="text-center">
                    <Link  target="_blank" download={resume} to={resume}
                     className="btn btn-outline btn-accent">
                        <MdOutlineFileDownload className="inline-block" />
                      Download Resume
                    </Link>
                </div>
                
            </div>
            </div>
        </div>
    );
};

export default Banner;