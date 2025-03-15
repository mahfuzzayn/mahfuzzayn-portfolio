import React from "react";
import typeScriptLogo from "../../assets/images/languages pics/typescript.png";
import antDesignLogo from "../../assets/images/languages pics/antdesign.png";
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
                        I am a skilled Frontend developer with expertise in
                        Next.js, React, Node.js, MongoDB, Redux, and
                        TailwindCSS. I have a strong understanding of front-end
                        development, including building responsive, interactive
                        user interfaces with React and Next.js. On the backend,
                        I am proficient in developing scalable applications
                        using Node.js and MongoDB. I also have experience
                        implementing state management with Redux and optimizing
                        application performance. With a solid foundation in
                        version control using Git, I collaborate effectively and
                        manage projects efficiently, ensuring high-quality,
                        maintainable code.
                    </p>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
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
                        data-aos="zoom-in-down"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-600"
                    >
                        <img src={reactLogo} alt="" className="w-20 mx-auto" />
                        <p className="mt-4">React JS</p>
                    </div>
                    <div
                        data-aos="zoom-in-down"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500"
                    >
                        <img
                            src={typeScriptLogo}
                            alt=""
                            className="w-20 mx-auto"
                        />
                        <p className="mt-4">TypeScript</p>
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
                        data-aos="zoom-in-down"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500"
                    >
                        <img
                            src={antDesignLogo}
                            alt=""
                            className="w-20 mx-auto"
                        />
                        <p className="mt-4">Ant Design</p>
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
