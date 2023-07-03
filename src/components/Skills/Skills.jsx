import React from "react";
import htmlLogo from "../../assets/images/languages pics/html.png";
import cssLogo from "../../assets/images/languages pics/css.png";
import javascriptLogo from "../../assets/images/languages pics/javascript.png";
import reactLogo from "../../assets/images/languages pics/react.png";
import tailwindcssLogo from "../../assets/images/languages pics/tailwindcss.png";
import nextjsLogo from "../../assets/images/languages pics/nextjs.png";
import nodejsLogo from "../../assets/images/languages pics/nodejs.png";
import githubLogo from "../../assets/images/languages pics/github.png";

const Skills = () => {
    return (
        <div className="skills my-[130px]">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl md:text-5xl font-bold inline text-indigo-500">
                        Skills
                    </p>
                    <p className="py-6">
                        I am a skilled MERN Stack developer with expertise in
                        HTML, CSS, JavaScript, React, TailwindCSS, Next.js,
                        Node.js, and GitHub. I have a strong understanding of
                        front-end development, including building responsive and
                        interactive user interfaces with React and TailwindCSS.
                        I am proficient in back-end development using Node.js
                        and have experience working with Next.js for server-side
                        rendering. With a solid foundation in version control
                        using GitHub, I am able to collaborate effectively and
                        manage projects efficiently.
                    </p>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
                    <div
                        data-aos="zoom-in-down"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500"
                    >
                        <img src={htmlLogo} alt="" className="w-20 mx-auto" />
                        <p className="mt-4">HTML</p>
                    </div>
                    <div
                        data-aos="zoom-in-down"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500"
                    >
                        <img src={cssLogo} alt="" className="w-20 mx-auto" />
                        <p className="mt-4">CSS</p>
                    </div>
                    <div
                        data-aos="zoom-in-down"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-500"
                    >
                        <img
                            src={javascriptLogo}
                            alt=""
                            className="w-20 mx-auto"
                        />
                        <p className="mt-4">JavaScript</p>
                    </div>
                    <div
                        data-aos="zoom-in-down"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-600"
                    >
                        <img src={reactLogo} alt="" className="w-20 mx-auto" />
                        <p className="mt-4">React JS</p>
                    </div>
                    <div
                        data-aos="zoom-in-up"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-400"
                    >
                        <img
                            src={tailwindcssLogo}
                            alt=""
                            className="w-20 mx-auto"
                        />
                        <p className="mt-4">Tailwind CSS</p>
                    </div>
                    <div
                        data-aos="zoom-in-up"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-white"
                    >
                        <img src={nextjsLogo} alt="" className="w-20 mx-auto" />
                        <p className="mt-4">Next JS</p>
                    </div>
                    <div
                        data-aos="zoom-in-up"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-green-400"
                    >
                        <img src={nodejsLogo} alt="" className="w-20 mx-auto" />
                        <p className="mt-4">Node JS</p>
                    </div>
                    <div
                        data-aos="zoom-in-up"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-400"
                    >
                        <img src={githubLogo} alt="" className="w-20 mx-auto" />
                        <p className="mt-4">GitHub</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
