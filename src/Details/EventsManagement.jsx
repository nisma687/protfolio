
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import img1 from "../assets/img/project4.png"
import img2 from "../assets/img/2.png";
import img3 from "../assets/img/3.png";
import img4 from "../assets/img/4.png";
import img5 from "../assets/img/5.png";

const EventsManagement = () => {
    return (
        <div className="mt-3 mb-4
        animate__animated animate__fadeInUp
        
        ">
            <h1 className="text-center
            text-4xl
             mt-3">All about Education and Training Event Management</h1>
            <div className='mt-2 mb-2 p-7'>
            <AwesomeSlider className="">
            
            <div data-src={img1} />
            <div data-src={img2} />
            <div data-src={img3} />
            <div data-src={img4} />
            <div data-src={img5} />
           
            </AwesomeSlider>
            </div>
            <div className='mt-3 mb-4'>
                <h1 className="mx-auto p-6
                text-2xl 
                 mt-3">
                 
                    <br />
                   Education and Training Event Management, This website is designed for event management  who are seeking opportunities to manage events.This Website is build with react,js,tailwind,daisy ui,react hook form,react icons
                    .It also conducts training for students as doing Event Management.
                 </h1>
                 <p className='text-center  text-xl'>
                   <span className='font-semibold'>The keyPoints of this website are:</span>
                    <ul className='
                     list-decimal mt-3
                     italic
                        list-inside
                    '>
                        <li> It has
                        home,login,registration,event routes in the navbar
                        </li>
                        <li>where the home login and registration page is available for everyone</li>
                        <li>
                        the other route event which is a private route a user must login or create a account to access those
                        </li>
                        <li>
                        resources route is also same you need to register first or login first if you already have an account
                        </li>
                        <li>as it has a login an registration page and it was validated also it can easily create a user also make one user to login also to logout

                        </li>
                      
                        <li>also if someone has to see the services of this system they need to login first.</li>
                    </ul>
                    <h2 className='font-semibold mt-2'>All the links:</h2>
                    <ul className='
                     list-decimal mt-2
                     italic
                        list-inside
                    '>
                        <li>
                        Code Link:<a 
                        target='_blank'
                        rel="noreferrer"
                        className='text-blue-400 
                        underline
                        hover:text-blue-800'
                        href="https://github.com/nisma687/Event-Management-System">GitHub Link</a>
                        </li>
                        <li>
                        Live Link:<a 
                        target='_blank'
                        rel="noreferrer"
                        className='text-blue-400 
                        underline
                        hover:text-blue-800'
                        href="https://education-training-react.web.app/"> Website Link</a>
                        </li>
                    </ul>
                 </p>
            </div>
        </div>
    );
};

export default EventsManagement;