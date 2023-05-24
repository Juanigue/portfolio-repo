"use client"
import React from 'react';
import { RiMoonFill, RiSunLine } from "react-icons/ri";

interface NavItem { 
    label: string 
    page: string 
}
const  NAV_ITEMS: Array<NavItem> = [
    {
        label: "Home",
        page: "home",
    },
    {
        label: "About",
        page: "about",
    },
    {
        label: "Projects",
        page: "projects",
    },
] 
const Navbar = () => {
  return (
  );
};

export default Navbar