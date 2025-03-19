"use client";

import React from "react";
import "./NavBar.css";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavBar = () => {
    const pathname = usePathname();

    return (
        <header className="flex justify-between items-center px-5 py-5">
            <h3 className="text-3xl font-semibold logo">Mahfuz Zayn</h3>
            <nav className="hidden md:flex">
                <ul className="flex gap-x-5 font-medium text-white">
                    <li>
                        <Link
                            href="/"
                            className={`${cn("text-white", {
                                "text-cyan-500": pathname === "/",
                                "hover:text-[#4f39f6]": pathname !== "/",
                            })}`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className={`${cn("text-white", {
                                "text-cyan-500": pathname === "/about",
                                "hover:text-[#4f39f6]": pathname !== "/about",
                            })}`}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/skills"
                            className={`${cn("text-white", {
                                "text-cyan-500": pathname === "/skills",
                                "hover:text-[#4f39f6]": pathname !== "/skills",
                            })}`}
                        >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/projects"
                            className={`${cn("text-white", {
                                "text-cyan-500": pathname === "/projects",
                                "hover:text-[#4f39f6]":
                                    pathname !== "/projects",
                            })}`}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className={`${cn("text-white", {
                                "text-cyan-500": pathname === "/contact",
                                "hover:text-[#4f39f6]": pathname !== "/contact",
                            })}`}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="hamburger-menu flex md:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger className="outline-none">
                        <div className="border-1 border-white p-1.5 rounded-sm cursor-pointer">
                            <FaBars className="text-white text-md" />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-[#111827] border-[#111827] text-white p-2 mt-2 mr-8 flex flex-col gap-y-2">
                        {[
                            { label: "Home", path: "/" },
                            { label: "About", path: "/about" },
                            { label: "Skills", path: "/skills" },
                            { label: "Projects", path: "/projects" },
                            { label: "Contact", path: "/contact" },
                        ].map(({ label, path }) => (
                            <Link key={path} href={path} className="w-full">
                                <DropdownMenuItem
                                    className={cn(
                                        "text-[16px] cursor-pointer w-full rounded-md transition-all duration-200",
                                        {
                                            "bg-cyan-500 hover:!bg-cyan-500 !text-white":
                                                pathname === path,
                                            "hover:!bg-[#4f46e5] !text-white":
                                                pathname !== path,
                                        }
                                    )}
                                >
                                    {label}
                                </DropdownMenuItem>
                            </Link>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
};

export default NavBar;
