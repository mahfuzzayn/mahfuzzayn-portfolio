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
                    <h1 className="text-5xl font-bold">
                        I'm <span className="text-cyan-500">Mahfuz Zayn</span>
                    </h1>
                    <p className="text-lg text-indigo-500 font-semibold">
                        Frontend Developer{" "}
                        <span className="text-gray-500">|</span> Mern Stack
                        Developer
                    </p>
                    <p>
                        As a Frontend and MERN Stack Developer, I have a strong
                        foundation in building dynamic, responsive, and scalable
                        web applications. I specialize in creating interactive
                        user interfaces using Next.js, React.js, and Redux,
                        ensuring a seamless and engaging user experience. On the
                        backend, I am proficient in developing full-stack
                        applications with Node.js, Express.js, and MongoDB,
                        integrating APIs, and handling authentication and
                        authorization. I am skilled in optimizing performance,
                        debugging, and troubleshooting to ensure smooth
                        functionality and high-quality code. My passion lies in
                        building end-to-end solutions that are both efficient
                        and user-friendly.
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
                            Kayesthorail, Sylhet, Bangladesh
                        </span>
                    </p>
                    <p className="text-indigo-500">
                        Number:{" "}
                        <span className="text-white">+880 160645 1099</span>
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
