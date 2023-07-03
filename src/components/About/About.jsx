import React from "react";
import aboutPicture from "../../assets/images/about_pic.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const About = () => {
    return (
        <div className="about my-[130px]">
            <div className="flex flex-col lg:flex-row items-center justify-center mx-10 md:mx-20 gap-x-10 gap-y-20">
                <div className="image-section">
                    <img
                        src={aboutPicture}
                        className="max-w-md w-full md:w-auto rounded-2xl"
                        alt=""
                    />
                </div>
                <div className="text-section text-white space-y-4">
                    <h1 className="text-5xl font-bold">I'm <span className="text-cyan-500">Mahfuz Zayn</span></h1>
                    <p className="text-lg text-indigo-500 font-semibold">
                        Mern Stack Developer <span className="text-gray-500">|</span> UI/UX Designer
                    </p>
                    <p>
                        As a Junior MERN Developer, I have a solid foundation in
                        building web applications using the MERN stack. With a
                        focus on MongoDB, Express.js, React.js, and Node.js, I
                        have gained hands-on experience in developing responsive
                        and interactive user interfaces. My skills include
                        translating design mockups into high-quality code,
                        implementing user authentication and authorization
                        features, and troubleshooting and debugging to optimize
                        performance.
                    </p>
                    <p className="text-indigo-500">
                        Email:{" "}
                        <span className="text-white">
                            <a href="mailto: mahfuzzayn8@gmail.com">
                                mahfuzzayn8@gmail.com
                            </a>
                        </span>
                    </p>
                    <p className="text-indigo-500">
                        Location:{" "}
                        <span className="text-white">
                            Kayestorail, Sylhet, Bangladesh
                        </span>
                    </p>
                    <p className="text-indigo-500">
                        Number:{" "}
                        <span className="text-white">+8801580464009</span>
                    </p>
                    <button className="bg-indigo-500 px-4 py-2 rounded-lg">
                        <a
                            href="https://drive.google.com/file/d/1-Ra5hdkbkFtRWyolsOt903Ni-4B2wcEj/view?usp=sharing"
                            target="_blank"
                            className="flex items-center gap-x-2"
                        >
                            Resume <FaExternalLinkAlt />
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
