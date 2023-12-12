
import img from "../assets/img/project1.png";
import img2 from "../assets/img/edu1.png";
import img3 from "../assets/img/edu2.png";
import img4 from "../assets/img/edu3.png";
import img5 from "../assets/img/edu4.png";
import img6 from "../assets/img/edu5.png";
import img7 from "../assets/img/edu6.png";
import img8 from "../assets/img/edu7.png";
import img9 from "../assets/img/edu8.png";

const EduMentor360 = () => {
    return (
        <div className="mt-4
        animate__animated animate__fadeInUp
         mx-auto">
            <div className="grid
            grid-cols-1
             lg:grid-cols-2 p-4 ">
            <div className="my-4">
                <div>
                <div className="grid grid-cols-2">
                <img src={img} alt="EduMentor360" />
                <img src={img2} alt="EduMentor360" />
                <img src={img3} alt="EduMentor360" />
                <img src={img4} alt="EduMentor360" />
                </div>
                <img src={img5} alt="EduMentor360" />
                <img src={img6} alt="EduMentor360" />
                

                
                </div>
            </div>
            <div className="">
                <h2 className="text-center
                text-4xl
                 my-auto">
                    Details about EduMentor360 
                </h2>
                <p className="text-center
                mt-4
                text-xl italic 
                    my-auto">
                        This website is designed for both students and teachers who are seeking opportunities.Students Who wants to learn more and develope their skills.
    
                        This Website is build with react,js,express js,mongo db,tailwind,daisy ui,react hook form,react marquee,react awesome components,react icons.

                </p>
                <br />
                <p className="text-center text-xl italic">
                   The features of this website are:
                   <ul className="
                     list-disc list-inside
                   ">
                    <li>
                    There are total 4 users.Admin,User,Student and Teacher.
                    </li>
                    <li>
                    Admin,Student,Teacher All have different dashboard
                    </li>
                    <li>
                    User have to login to enroll for course or to simply for a teachers job.
                    </li>
                    <li>
                    After successfully logging a user can apply for job by filling up a form in the Teach on Mentor section
                    </li>
                    <li>
                    A logged in user can pay for the course and become a student
                    </li>
                    <li>
                    In the navbar if someone clicks on the Profile picture they will be able to see dashboard for them
                    </li>
                    <li>
                    Admin dashboard has all the users,profile ,home ,requested course ,requested teachers route.
                    </li>
                    <li>
                    Teachers has their class and add a course section. after adding a course admin will approve that and it will be shown to the my course section of teacher dashboard.
                    </li>
                    <li>
                    User can see their enrolled courses,my profile,my class section in their dashboard.
                    </li>
                    <li>
                    Admin can add reject any application of teacher ,make any user as admin
                    </li>
                    <li>
                    Teacher can delete their course and see the details if it is approved by admin.
                    </li>
                    <li>
                    Home page has total 8 sections, a section of banner, then the popular courses,Total users section,Teachers section,Upcoming news,our team section and last but not the least a career guidelines section for the students
                    </li>
                    <li>
                    Career Guidelines section has a little bit of hover effect.
                    </li>
                    </ul>
                    
                </p>
                <br />
                
               
              
            </div>
           
            </div>
            <div className="mt-4 mb-4 gap-5">
                <div className="grid
                grid-cols-1
                 lg:grid-cols-2">
                <img src={img7} alt="EduMentor360" />
                <img src={img8} alt="EduMentor360" />
                <img src={img9} alt="EduMentor360" />
                
                </div>

            </div>
            <div className="mt-2">
                <h2 className="text-center
                text-4xl 
                 my-auto">
                    Links to the website
                    
                </h2>
                <div className="mt-2 mb-4">
                <p className="text-center">
                    <ul>
                        <li>
                            github link: <a className="
                            text-blue-400 underline
                            hover:text-blue-700"
                            target="_blank" rel="noreferrer"
                            href="https://github.com/programming-hero-web-course1/b8a12-client-side-nisma687">
                            Github link
                            </a>
                        </li>
                        <li>
                            live website link: <a className="
                            text-blue-400 underline
                            hover:text-blue-700"
                            target="_blank" rel="noreferrer"
                            href="https://65686f4076ceac1a08beb38b--iridescent-pastelito-b3cd78.netlify.app/">
                            Website link
                            </a>
                        </li>
                        <li>
                            admin email:boruto@gmail.com password:123456
                        </li>
                        

                    </ul>
                </p>

                </div>
                </div>

        </div>
    );
};

export default EduMentor360;