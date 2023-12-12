
import food1 from "../assets/img/food1.png";
import food2 from "../assets/img/food2.png";
import food3 from "../assets/img/food3.png";
import food4 from "../assets/img/food4.png";
import food5 from "../assets/img/food5.png";
import food6 from "../assets/img/food6.png";
import food7 from "../assets/img/food7.png";
import product from "../assets/img/project2.png";
const FoodUnity = () => {
    return (
        <div className="
        justify center">
          
            <div className="
            mt-3 mb-4 animate__animated animate__fadeInUp
            ">
                <h1 className="text-center
                text-4xl
                 mt-3">All about Food Unity</h1>
                 <br />
                 <h2 className="text-center 
                    text-xl text-violet-700
                 font-semibold">
                        Description
                 </h2>
                 <br />
                    <p className="text-center text-xl">
                    This website is basically for the people who wants to donate also who are in need.FoodUnity network connects everyone in the same place coming together to win it.
                    This Website is build with react,js,express js,mongo db,tailwind,daisy ui,react hook form,react marquee,react awesome components,react icons.All the features of this website are listed below.
                    </p>
                    <br />
                    <h2 className="text-center
                    text-xl 
                     ">
                        <span className="font-semibold text-violet-700">
                            Features:
                        </span>
                        <ul className="
                        list-decimal mt-3 
                        list-inside
                        ">
                            <li>
                            One can login,register,see the available foods
                            </li>
                            <li>
                            To see the details they have to login first
                            </li>
                            <li>
                            homepage has banner,featured foods,to know about more ,videos are included.also the upcoming events
                            </li>
                            <li>
                            if there exist no route or any error it will let to a custom made error page
                            </li>
                            <li>
                            after login one can add food,delete food,update food,see the details of the food
                            </li>
                            <li>
                            the logged in user can see his or her requested food details and they can delete if they want
                            </li>
                            <li>
                            one can login or simply use google to login
                            </li>
                            <li>
                            request for food is only available for user who are logged in
                            </li>
                            <li>
                            bootstrap,flowbite and tailwind,daisy ui were used for styling
                            </li>
                           
                        </ul>
                        <br />
                        <h3 className="text-center
                        text-violet-700 
                        font-semibold">
                        Links of the website
                        </h3>
                        <ul className="
                        list-disc mt-3 list-inside
                        ">
                        <li>
                           github link: <a href="https://github.com/Porgramming-Hero-web-course/b8a11-client-side-nisma687" className="text-blue-400 underline hover:text-blue-800">Github Link</a>

                           </li>
                        <li>
                            live link: <a href="https://6552fef781c71c13859818b4--heartfelt-meerkat-4e9c86.netlify.app/" className="text-blue-400 underline hover:text-blue-800">Website Link</a>
                        </li>
                        
                        </ul>
                        <h4
                        className="text-violet-700 font-semibold text-center mt-3"
                        >Note:
                        <span className="text-xl">
                            This website takes time to load as it is hosted in vercel for the backend and netlify for the frontend
                        </span>
                        </h4>
                    </h2>
                    <br />
            </div>
            <div className="grid 
            grid-cols-1 
            lg:grid-cols-2 gap-4">
            <div>
               <img src={product} alt="" />
               </div>
               <div>
               <img src={food1} alt="" />
               </div>
               
                <div>
                <img src={food2} alt="" />
                </div>
                <div>
                <img src={food3} alt="" />
                </div>
                <div>
                <img src={food4} alt="" />
                </div>
                <div>
                <img src={food5} alt="" />
                </div>
                <div>
                <img src={food6} alt="" />
                </div>
                <div>
                <img src={food7} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FoodUnity;