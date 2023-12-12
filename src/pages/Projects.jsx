
import AwesomeSlider from 'react-awesome-slider';
import img1 from "../assets/img/project1.png"
import 'react-awesome-slider/dist/styles.css';

import img2 from "../assets/img/project2.png";
import img3 from "../assets/img/project3.png";
import img4 from "../assets/img/project4.png";
import { Link } from 'react-router-dom';
const Projects = () => {
    return (
        
        <div>
            <h1 className="text-center
            text-4xl
             mt-3">All My Projects</h1>
            <div className='mt-4 mb-5
             animate__animated animate__fadeInUp
            '>
            <AwesomeSlider className="">
            
            <div data-src={img1} />
            <div data-src={img4} />
            <div data-src={img3} />
            <div data-src={img2} />
           
            </AwesomeSlider>
            </div>
            <div className='mt-4 mb-4'>
                <h1 className="text-center
                text-4xl
                 mt-3">
                 
                    <br />
                    Learn More About My Projects
                 </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2
            gap-4
            mt-4 mb-4
            animate__animated animate__fadeInUp
            ">
                <div className="border-1  
                rounded-lg 
                
                ">
                <div className="card 
                 max-w-full h-96
                 bg-base-100 shadow-xl image-full">
                <figure><img src={img1} alt="picture of EduMentor360" /></figure>
                <div className="card-body text-center">
                    <h2 className="card-title justify-center">
                        Edu Mentor 360
                    </h2>
                    <p className='text-xl italic mt-3 text-violet-100'>
                    This website is designed for both students and teachers who are seeking opportunities.Students Who wants to learn more and develope their skills.

                    This Website is build with react,js,express js,mongo db,tailwind,daisy ui,react hook form,react marquee,react awesome components,react icons.
                    </p>
                    <div className="card-actions justify-center">
                    <Link
                    to="/eduMentor360"
                     className="btn btn-outline btn-accent">More Info</Link>
                    </div>
                </div>
                </div>



                    
                </div>
                <div className="border-1  
                rounded-lg 
                
                ">
                <div className="card 
                 max-w-full h-96
                 bg-base-100 shadow-xl image-full">
                <figure><img src={img4} alt="picture of EduMentor360" /></figure>
                <div className="card-body text-center">
                    <h2 className="card-title justify-center">
                        Education and 
                        Training Event Management
                    </h2>
                    <p className='text-xl italic mt-3 text-violet-100'>
                    This website is designed for event management  who are seeking opportunities to manage events.This Website is build with react,js,tailwind,daisy ui,react hook form,react icons
                    .It also conducts training for students as doing Event Management.To learn more about this website click on the more info button.
                    </p>
                    <div className="card-actions justify-center">
                    <Link
                    to="/eventManagement"
                     className="btn btn-outline btn-accent">More Info</Link>
                    </div>
                </div>
                </div>



                    
                </div>
                <div className="border-1  
                rounded-lg 
                
                ">
                <div className="card 
                 max-w-full h-96
                 bg-base-100 shadow-xl image-full">
                <figure><img src={img2} alt="picture of EduMentor360" /></figure>
                <div className="card-body text-center">
                    <h2 className="card-title justify-center">
                       FoodUnity Community
                    </h2>
                    <p className='text-xl italic mt-3 text-violet-100'>
                    This website is basically for the people who wants to donate also who are in need.FoodUnity network connects everyone in the same place coming together to win it.This Website is build with react,js,tailwind,
                    express js,daisy ui,react hook form,react icons
                    .It also conducts training for students as doing Event Management.To learn more about this website click on the more info button.
                    </p>
                    <div className="card-actions justify-center">
                    <Link
                    to="/foodUnity"
                     className="btn btn-outline btn-accent">More Info</Link>
                    </div>
                </div>
                </div>



                    
                </div>
                </div>

            </div>
    
            
        </div>
    );
};

export default Projects;