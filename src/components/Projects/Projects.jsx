import React from "react";
import project1snap from "../../assets/images/Sites Snaps/Magic Minds Academy.png";
import project2snap from "../../assets/images/Sites Snaps/Lego Sets.png";
import "./Projects.css";
import project3snap from "../../assets/images/Sites Snaps/Sylheti Khanirghor.png";
import "./Projects.css";
import project4snap from "../../assets/images/Sites Snaps/Home - JobSearch.png";
import "./Projects.css";
import project5snap from "../../assets/images/Sites Snaps/Wisdom House.png";
import "./Projects.css";
import { FaExternalLinkAlt, FaGithub, FaServer } from "react-icons/fa";

const Projects = () => {
    return (
        <div className="projects my-[130px]">
            <div className="text-white">
                <div className="mx-10 md:mx-20 mb-10">
                    <h1 className="text-4xl lg:text-5xl font-bold text-indigo-500">
                        My Projects
                    </h1>
                    <p className="mt-6">
                        Here are few projects that I have developed using MERN
                        Stack.
                    </p>
                </div>
                <div className="projects grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 md:mx-20">
                    <div className="magic-minds-academy bg-gray-800 rounded-xl p-6">
                        <h3 className="text-xl text-cyan-500 font-semibold mb-4">
                            Magic Minds Academy
                        </h3>
                        <div className="screen">
                            <a href={project1snap} target="_blank">
                                <img
                                    src={project1snap}
                                    className="bottom-[-450px]"
                                />
                            </a>
                        </div>
                        <div className="content">
                            <h3 className="text-xl mt-4 mb-2 font-semibold text-indigo-500">
                                Features ✨
                            </h3>
                            <ul className="list-disc ml-5 text-sm space-y-1">
                                <li>MongoDB Integrated CRUD Operations.</li>
                                <li>
                                    Custom Vercel NodeJS Server Implemented.
                                </li>
                                <li>Firebase Authentication Integrated.</li>
                                <li>
                                    Implemented TailwindCSS, Chakra UI, Image
                                    Validator, React Toastify, React Icons etc.
                                </li>
                                <li>Build with Dynamic Data Loading.</li>
                                <li>Firebase Hosting Integrated.</li>
                                <li>Ensured Protected/Private Route.</li>
                                <li>
                                    Admin, Instructor & Student Separate Routes.
                                </li>
                            </ul>
                            <div className="flex gap-4 mt-4 flex-wrap">
                                <a
                                    href="https://magic-minds-academy.web.app/"
                                    target="_blank"
                                >
                                    <button className="bg-cyan-600  px-2 py-1 rounded-md flex items-center gap-x-2">
                                        <FaExternalLinkAlt /> Demo
                                    </button>
                                </a>
                                <a
                                    href="https://github.com/mahfuzzayn/magic-minds-academy-client"
                                    target="_blank"
                                >
                                    <button className="bg-cyan-600  px-2 py-1 rounded-md flex items-center gap-x-2">
                                        <FaGithub /> Client
                                    </button>
                                </a>
                                <a
                                    href="https://github.com/mahfuzzayn/magic-minds-academy-server"
                                    target="_blank"
                                >
                                    <button className="bg-cyan-600  px-2 py-1 rounded-md flex items-center gap-x-2">
                                        <FaServer /> Server
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="lego-sets bg-gray-800 rounded-xl p-6">
                        <h3 className="text-xl text-cyan-500 font-semibold mb-4">
                            Lego Sets
                        </h3>
                        <div className="screen">
                            <a href={project2snap} target="_blank">
                                <img
                                    src={project2snap}
                                    className="bottom-[-326px]"
                                />
                            </a>
                        </div>
                        <div className="content">
                            <h3 className="text-xl mt-4 mb-2 font-semibold text-indigo-500">
                                Features ✨
                            </h3>
                            <ul className="list-disc ml-5 text-sm space-y-1">
                                <li>MongoDB Integrated CRUD Operations.</li>
                                <li>Firebase Authentication Integrated.</li>
                                <li>
                                    Custom Vercel NodeJS Server Implemented.
                                </li>
                                <li>
                                    Implemented TailwindCSS, DaisyUI, Image
                                    Validator, React Toastify, React Icons etc.
                                </li>
                                <li>Firebase Hosting Integrated.</li>
                                <li>Ensured Protected/Private Route.</li>
                            </ul>
                            <div className="flex gap-4 mt-4 flex-wrap">
                                <a
                                    href="https://lego-sets-be767.web.app/"
                                    target="_blank"
                                >
                                    <button className="bg-cyan-600  px-2 py-1 rounded-md flex items-center gap-x-2">
                                        <FaExternalLinkAlt /> Demo
                                    </button>
                                </a>
                                <a
                                    href="https://github.com/mahfuzzayn/lego-sets-client"
                                    target="_blank"
                                >
                                    <button className="bg-cyan-600  px-2 py-1 rounded-md flex items-center gap-x-2">
                                        <FaGithub /> Client
                                    </button>
                                </a>
                                <a
                                    href="https://github.com/mahfuzzayn/lego-sets-server"
                                    target="_blank"
                                >
                                    <button className="bg-cyan-600  px-2 py-1 rounded-md flex items-center gap-x-2">
                                        <FaServer /> Server
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="sylheti-khanighor bg-gray-800 rounded-xl p-6">
                        <h3 className="text-xl text-cyan-500 font-semibold mb-4">
                            Sylheti Khanighor
                        </h3>
                        <div className="screen">
                            <a href={project3snap} target="_blank">
                                <img
                                    src={project3snap}
                                    className="bottom-[-265px]"
                                />
                            </a>
                        </div>
                        <div className="content">
                            <h3 className="text-xl mt-4 mb-2 font-semibold text-indigo-500">
                                Features ✨
                            </h3>
                            <ul className="list-disc ml-5 text-sm space-y-1">
                                <li>Firebase Authentication Integrated.</li>
                                <li>Custom NodeJS Server Connected</li>
                                <li>Firebase Authentication Integrated.</li>
                                <li>
                                    Implemented TailwindCSS, Flowbite, Image
                                    Validator, React Toastify, React Icons etc.
                                </li>
                                <li>Build with Dynamic Data Loading.</li>
                                <li>Single Page Application (SPA).</li>
                                <li>Added Protected/Private Route.</li>
                            </ul>
                            <div className="flex gap-4 mt-4 flex-wrap">
                                <a
                                    href="https://sylheti-khanirghor.web.app/"
                                    target="_blank"
                                >
                                    <button className="bg-cyan-600  px-2 py-1 rounded-md flex items-center gap-x-2">
                                        <FaExternalLinkAlt /> Demo
                                    </button>
                                </a>
                                <a
                                    href="https://github.com/mahfuzzayn/sylheti-khanirghor-client-side"
                                    target="_blank"
                                >
                                    <button className="bg-cyan-600  px-2 py-1 rounded-md flex items-center gap-x-2">
                                        <FaGithub /> Client
                                    </button>
                                </a>
                                <a
                                    href="https://github.com/mahfuzzayn/sylheti-khanirghor-server-side"
                                    target="_blank"
                                >
                                    <button className="bg-cyan-600  px-2 py-1 rounded-md flex items-center gap-x-2">
                                        <FaServer /> Server
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
