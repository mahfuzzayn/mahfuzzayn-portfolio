import Link from "next/link";
import React from "react";
import {
    FaFacebook,
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="h-full flex flex-col lg:flex-row justify-between items-center text-white text-center bg-gray-800 px-5 py-5 space-y-6 lg:space-y-0">
                <h2>
                    Design & Developed by{" "}
                    <span className="text-indigo-500 font-semibold">
                        <Link href="/contact">Mahfuz Zayn</Link>{" "}
                        <span className="text-red-500 relative top-[1px] pl-0.5">
                            ❤
                        </span>
                    </span>
                </h2>
                <p>
                    Copyright © {new Date().getFullYear()} Mahfuz Zayn - All
                    rights reserved
                </p>
                <div className="social-media flex gap-x-3 md:gap-x-2 text-xl">
                    <a
                        href="https://www.linkedin.com/in/mahfuzzayn/"
                        target="_blank"
                    >
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/mahfuzzayn" target="_blank">
                        <FaGithub />
                    </a>
                    <a href="https://twitter.com/mahfuz_zayn" target="_blank">
                        <FaTwitter />
                    </a>
                    <a
                        href="https://www.facebook.com/mahfuzzayn8/"
                        target="_blank"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="https://www.youtube.com/@mahfuzzayn"
                        target="_blank"
                    >
                        <FaYoutube />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
