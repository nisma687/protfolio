
import gif from "../assets/img/image_processing20210912-10430-132g4ab.gif";
import { MdOutlineMail } from "react-icons/md";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
const ContactMe = () => {
    return (
        <div className="mt-4 mb-4">
            <div className="flex flex-row justify-center">
            <div className="w-1/2 my-auto animate__animated 
            animate__fadeInUp
            ">
            <h1 className="text-center text-4xl mt-3">Contact Me</h1>
            <div className="text-center text-xl mt-4 ">
           
                <h2>
                <MdOutlineMail  className="inline-block
                text-3xl text-violet-900 
                hover:text-violet-700
                 mr-3"/>
                    <span className="font-semibold">Email:</span>
                    <span className="ml-2 text-violet-700">
                        
                        nisma.hossain.41982@gmail.com</span>
                </h2>
                <br />
                <h3>
                <FaLinkedin className="inline-block
                text-2xl text-violet-900 
                hover:text-violet-700
                 mr-2
                 "/>
                    <span className="font-semibold">Linkedin:</span>
                    <span className="ml-2 text-violet-700">
                        <a href="https://www.linkedin.com/in/nisma-hossain-aa1946220/">Nisma Hossain</a>
                    </span>
                </h3>
                <br />
                <h5>
                <FaSquareTwitter className="inline-block
                text-2xl text-violet-900 mr-2 hover:text-violet-700
                "/>
                    <span className="font-semibold">Twitter:</span>
                    <span className="ml-2 text-violet-700">
                        <a href="https://twitter.com/NismaHossain">Nisma Hossain</a>
                    </span>
                </h5>
                <br />
                <h6>
                <FaSquareGithub className="inline-block
                text-2xl text-violet-900 mr-2 hover:text-violet-700"/>
                    <span className="font-semibold">Github:</span>
                    <span className="ml-2 text-violet-700">
                        <a href="https://github.com/nisma687/">github link</a>
                    </span>
                </h6>

            </div>
            </div>
            <div className="w-1/2
            animate__animated 
            animate__fadeInRight
            ">
             <img src={gif} alt="" />
            </div>
            </div>
        </div>
    );
};

export default ContactMe;