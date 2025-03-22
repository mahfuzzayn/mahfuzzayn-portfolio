import React from "react";
import bannerImage from "../assets/images/mahfuzzayn-banner-picture.png";
import Image from "next/image";
import Link from "next/link";
import TypingAnimation from "@/components/shared/TypingAnimation";

const HomePage = () => {
    return (
        <div className="home mt-[130px] lg:mt-0">
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
                            <TypingAnimation
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
                            />
                        </span>
                    </h3>
                    <p className="max-w-md">
                        Hey, I{"'"}m a Frontend Developer skilled in Next.js,
                        React.js, Redux, Node.js, and MongoDB, building fast,
                        dynamic, and scalable web applications.
                    </p>
                    <div className="interactions flex gap-x-2">
                        <Link href="/contact" className="">
                            <button className="border border-blue-500 text-white p-2 px-3 rounded-lg hover:bg-indigo-500 hover:border-indigo-500 cursor-pointer">
                                Hire Me Now
                            </button>
                        </Link>
                        <button className="bg-blue-500 text-white p-2 px-4 rounded-[25px]">
                            <Link
                                href="https://drive.google.com/file/d/1-Ra5hdkbkFtRWyolsOt903Ni-4B2wcEj/view?usp=sharing"
                                target="_blank"
                            >
                                My Resume
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="image-section">
                    <Image
                        src={bannerImage}
                        priority
                        alt="Banner Image of Mahfuz Zayn"
                    />
                </div>
                <p>
                    This approach doesn't require an API key and is completely
                    free. 3. Use Static Google Maps API (No Billing Required) If
                    you need a static map image, you can use the Google Static
                    Maps API without worrying about JavaScript-based billing:
                </p>
            </div>
        </div>
    );
};

export default HomePage;
