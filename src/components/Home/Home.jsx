import React from "react";
import picture from "../../assets/images/mahfuzzayn-banner-picture.png";
import { TypeAnimation } from "react-type-animation";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home mt-[100px]">
            <div className="flex flex-col lg:flex-row mx-10 md:mx-20 items-center justify-around">
                <div className="text-section w-full text-white space-y-3">
                    <h2 className="text-5xl font-semibold">
                        Hi, I am{" "}
                        <span className="text-[#25baf5] font-semibold">
                            Mahfuz Zayn
                        </span>
                    </h2>
                    <h3 className="text-3xl font-medium">
                        A{" "}
                        <span className="text-indigo-600 uppercase">
                            <TypeAnimation
                                sequence={[
                                    "Front End Developer",
                                    1000,
                                    "Next.js Developer",
                                    1000,
                                    "React Developer",
                                    1000,
                                    "MERN Stack Developer",
                                    1000,
                                    "Web Developer",
                                    1000,
                                ]}
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </h3>
                    <p className="max-w-md">
                        Hey, I'm a Frontend Developer skilled in Next.js,
                        React.js, Redux, Node.js, and MongoDB, building fast,
                        dynamic, and scalable web applications.
                    </p>
                    <div className="interactions flex gap-x-2">
                        <button className="border border-blue-500 text-white p-2 px-3 rounded-lg hover:bg-indigo-500 hover:border-indigo-500">
                            <Link to="/contact">Hire Me</Link>
                        </button>
                        <button className="bg-blue-500 text-white p-2 px-4 rounded-[25px]">
                            <a
                                href="https://drive.google.com/file/d/1-Ra5hdkbkFtRWyolsOt903Ni-4B2wcEj/view?usp=sharing"
                                target="_blank"
                            >
                                My Resume
                            </a>
                        </button>
                    </div>
                </div>
                <div className="image-section">
                    <img src={picture} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;
