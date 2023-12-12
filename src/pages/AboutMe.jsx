
import img from "../assets/img/nisma.jpg";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
const AboutMe = () => {
    return (
        <div>
            <div className="text-2xl font-bold mt-4">
                <h1>About Me</h1>
            </div>
           <div className="flex">
            <div className="w-1/2
            text-xl mt-2 
            border-gray-500 
            ">
                <img src={img} alt="" />
            </div>
           <div className=" 
           my-auto
           mt-2 w-1/2">
                <h2 className="text-2xl text-center">Hey there,
                    <br />
                    This is
                      <span className="text-blue-500 ml-2">
                    Nisma Hossain
                    </span></h2>
                    <br />
                <h2 className="text-center">
                    I am a student of American International University-Bangladesh.I have completed all my courses from my university and left with internship only.  I eagerly am waiting for my graduation.For that i need to finish my internship.I am a Student of Computer Science & Engineering.My major was information.I always had the urge to learn web-development so i ended up doing a course outside the university to explore and learn more.I have been building up my skills for 6 months. I am now confident enough to build a website from scratch.I have built some projects and i am still working on some projects.I consider myself as  a hardworking and dedicated person. I always try to give my best in everything i do.I aspire to be someone who can contribute to the society and make a difference.I want to be a part of a team where i can learn and grow as a person and as a professional. Maybe i am not the best but i am willing to learn and grow.In Future i want to combine my websites with artificial intelligence and machine learning.

                    
                </h2>
                <div>
                    <h2 className="text-2xl text-center
                    font-semibold
                     mt-4">Education</h2>
                    <div>
                        <h3 className="text-xl text-center mt-4">B.Sc in Computer Science and Engineering</h3>
                        <h4 className="text-lg text-center">American International University-Bangladesh</h4>
                        <h5 className="text-center">2020-2023(present)</h5>
                        <h6 className="text-center">CGPA: 3.84</h6>

                    </div>
                    <h3 className="text-2xl text-center
                    font-semibold
                     mt-4" >
                        Skills i have been working on
                    </h3>
                    <h2 className="text-3xl text-center ml-2">
                       <TiHtml5 className="inline-block" /> <IoLogoCss3 className="inline-block" /> <FaReact className="inline-block" /> <SiTailwindcss className="inline-block" />
                        <SiExpress className="inline-block" /> <SiMongodb className="inline-block" /> <TbBrandJavascript className="inline-block" />

                       

                    </h2>
                    <h2 className="text-2xl
                    font-semibold
                     text-center mt-2 mb-2">
                        Courses outside the university
                    </h2>
                    <h3 className="text-xl
                   text-blue-800
                    text-center mt-4">
                    Complete Web Development 
                    <br />
                    Course
                    <br />
                     With Jhankar Mahbub
                    </h3>
                    <h4 className="text-sm 
                    font-semibold
                    text-center">
                        batch 8
                    </h4>
                </div>
                <h2 className="text-2xl text-center font-semibold">
                    Experiences of Extra-Curricular
                </h2>
                <h3 className="text-center">
                    <span className="text-blue-500">1.</span> Worked as a Treasurer IEEE AIUB Student Branch from 2021-2023(july).I worked as a volunteer in IEEE AIUB Student Branch from 2020-2021(july).
                </h3>
                <h3 className="text-center">
                    <span className="text-blue-500">2.</span>
                    I was also part of photography club in my university.
                </h3>

                
            </div>
           </div>
        </div>
    );
};

export default AboutMe;