import React from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import {
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
    return (
        <header className="flex justify-between items-center px-5 py-5">
            <h3 className="text-3xl font-semibold logo">Mahfuz Zayn</h3>
            <nav className="hidden md:flex">
                <ul className="flex gap-x-5 font-medium text-white">
                    <li>
                        <NavLink to="/" className="hover:text-cyan-500">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="hover:text-cyan-500">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills" className="hover:text-cyan-500">
                            Skills
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className="hover:text-cyan-500">
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="hover:text-cyan-500">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="hamburger-menu flex md:hidden">
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label="Options"
                        icon={<FaBars />}
                        variant="outline"
                        className="border"
                        padding={6}
                        borderRadius={4}
                        color="white"
                    />
                    <MenuList
                        color="white"
                        className="bg-gray-900 p-4 rounded-lg list-none space-y-2"
                    >
                        <li>
                            <NavLink
                                to="/"
                                className="hover:text-cyan-500 pr-4"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className="hover:text-cyan-500 pr-4"
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/skills"
                                className="hover:text-cyan-500 pr-4"
                            >
                                Skills
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/projects"
                                className="hover:text-cyan-500 pr-4"
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className="hover:text-cyan-500 pr-4"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </MenuList>
                </Menu>
            </div>
        </header>
    );
};

export default NavBar;
