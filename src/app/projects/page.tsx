import React from "react";
import project1snap from "../../assets/images/Sites Snaps/PerpoDia.png";
import project2snap from "../../assets/images/Sites Snaps/Book Shop.png";
import project3snap from "../../assets/images/Sites Snaps/Magic Minds Academy.png";
import "./styles.css";
import { FaExternalLinkAlt, FaGithub, FaServer } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

const project1snapLink = "../../assets/images/Sites Snaps/PerpoDia.png";
const project2snapLink = "../../assets/images/Sites Snaps/Book Shop.png";
const project3snapLink =
    "../../assets/images/Sites Snaps/Magic Minds Academy.png";

export const metadata: Metadata = {
    title: "Projects - Mahfuz Zayn - Portfolio",
    description:
        "Explore a collection of my portfolio projects, showcasing a variety of web development solutions. From responsive front-end designs to robust full-stack applications, each project highlights my expertise in React, Next.js, Node.js, and more. Discover how I turn ideas into functional, user-friendly web experiences.",
};

const ProjectsPage = () => {
    return (
        <div className="projects mt-[130px] mb-[300px]">
            <div className="text-white">
                <div className="mx-10 md:mx-20 mb-10">
                    <h1 className="text-4xl lg:text-5xl font-bold text-indigo-500">
                        My Projects
                    </h1>
                    <p className="mt-6">
                        Here are few projects that I have developed using
                        Frontend Development & MERN Stack.
                    </p>
                </div>
                <div className="projects grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 md:mx-20">
                    <div className="lego-sets bg-gray-800 rounded-xl p-6">
                        <h3 className="text-xl text-cyan-500 font-semibold mb-4">
                            PerpoDia
                        </h3>
                        <div className="screen">
                            <Link href={project1snapLink} target="_blank">
                                <Image
                                    src={project1snap}
                                    priority
                                    alt="Project 1 Image"
                                />
                            </Link>
                        </div>
                        <div className="content">
                            <h3 className="text-xl mt-4 mb-2 font-semibold text-indigo-500">
                                Features ✨
                            </h3>
                            <ul className="list-disc ml-5 text-sm space-y-1">
                                <li>MongoDB Integrated CRUD Operations.</li>
                                <li>NextAuth Authentication Integrated.</li>
                                <li>
                                    Custom Vercel NodeJS Server Implemented.
                                </li>
                                <li>
                                    Implemented TailwindCSS, Shadcn, Image
                                    Validator, Sonner, Lucid React Icons etc.
                                </li>
                                <li>
                                    Next.js Server Side Rendering & Static Site
                                    Generation.
                                </li>
                                <li>User Dashboard Management.</li>
                            </ul>
                            <div className="flex gap-4 mt-4 flex-wrap">
                                <a
                                    href="https://perpodia.vercel.app/"
                                    target="_blank"
                                >
                                    <button className="bg-cyan-600  px-2 py-1 rounded-md flex items-center gap-x-2">
                                        <FaExternalLinkAlt /> Demo
                                    </button>
                                </a>
                                <a
                                    href="https://github.com/mahfuzzayn/perpodia-client"
                                    target="_blank"
                                >
                                    <button className="bg-cyan-600  px-2 py-1 rounded-md flex items-center gap-x-2">
                                        <FaGithub /> Client
                                    </button>
                                </a>
                                <a
                                    href="https://github.com/mahfuzzayn/perpodia-server"
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
                            Book Shop
                        </h3>
                        <div className="screen">
                            <Link
                                href={project2snapLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src={project2snap}
                                    priority
                                    alt="Project 2 Image"
                                />
                            </Link>
                        </div>
                        <div className="content">
                            <h3 className="text-xl mt-4 mb-2 font-semibold text-indigo-500">
                                Features ✨
                            </h3>
                            <ul className="list-disc ml-5 text-sm space-y-1">
                                <li>
                                    Next.js Server Side Rendering & Static Site
                                    Generation.
                                </li>
                                <li>Custom Authentication Integrated.</li>
                                <li>Custom NodeJS Server Connected.</li>
                                <li>
                                    Implemented TailwindCSS, Ant Design, Image
                                    Validator, Sonner, Lucid React Icons etc.
                                </li>
                                <li>Stripe Payment Integrated.</li>
                                <li>Ensured Protected/Private Route.</li>
                                <li>User & Admin Dashboard Management.</li>
                            </ul>
                            <div className="flex gap-4 mt-4 flex-wrap">
                                <a
                                    href="https://book-shop-b4a4v1-client.vercel.app/"
                                    target="_blank"
                                >
                                    <button className="bg-cyan-600  px-2 py-1 rounded-md flex items-center gap-x-2">
                                        <FaExternalLinkAlt /> Demo
                                    </button>
                                </a>
                                <a
                                    href="https://github.com/mahfuzzayn/book-shop-b4a4v1-client"
                                    target="_blank"
                                >
                                    <button className="bg-cyan-600  px-2 py-1 rounded-md flex items-center gap-x-2">
                                        <FaGithub /> Client
                                    </button>
                                </a>
                                <a
                                    href="https://github.com/mahfuzzayn/book-shop-b4a4v1-server"
                                    target="_blank"
                                >
                                    <button className="bg-cyan-600  px-2 py-1 rounded-md flex items-center gap-x-2">
                                        <FaServer /> Server
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="magic-minds-academy bg-gray-800 rounded-xl p-6">
                        <h3 className="text-xl text-cyan-500 font-semibold mb-4">
                            Magic Minds Academy
                        </h3>
                        <div className="screen">
                            <Link href={project3snapLink} target="_blank">
                                <Image
                                    src={project3snap}
                                    priority
                                    alt="Project 3 Image"
                                />
                            </Link>
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
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
