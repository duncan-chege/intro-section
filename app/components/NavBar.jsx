"use client";

import Image from "next/image"
import Logo from "../../public/images/logo.svg"
import CalendarIcon from "../../public/images/icon-calendar.svg"
import PlanningIcon from "../../public/images/icon-planning.svg"
import RemindersIcon from "../../public/images/icon-reminders.svg"
import TodoIcon from "../../public/images/icon-todo.svg"
import ArrowDown from "../../public/images/icon-arrow-down.svg"
import HamburgerIcon from "../../public/images/icon-menu.svg"
import CloseIcon from "../../public/images/icon-close-menu.svg"
import ArrowUp from "../../public/images/icon-arrow-up.svg"


import { useState, useEffect, useRef } from "react";

export default function NavBar({isMobileMenuOpen, setIsMobileMenuOpen}){
  const [dropdowns, setDropdowns] = useState({
    desktopFeatures: false,
    desktopCompany: false,
    mobileFeatures: false,
    mobileCompany: false,
  });

  const dropdownRefs = {
    desktopFeatures: useRef(null),
    desktopCompany: useRef(null),
    mobileFeatures: useRef(null),
    mobileCompany: useRef(null),
  };

  const toggleDropdown = (name, context) => {
    const dropdownKey = context + name;
    setDropdowns((prevDropdowns) => {
      const newState = !prevDropdowns[dropdownKey];
      return {
        ...prevDropdowns,
        [dropdownKey]: newState,
      };
    });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    for (const key in dropdownRefs) {
      if (dropdownRefs[key].current && !dropdownRefs[key].current.contains(event.target)) {
        setDropdowns((prevDropdowns) => ({
          ...prevDropdowns,
          [key]: false,
        }));
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-transparent p-4 flex flex-row justify-between">

      <Image className="flex-none shrink-0 object-contain" src={Logo} alt="Logo" />

      {/* Hamburger icon for mobile */}
      <button className="md:hidden z-50 fixed right-0" onClick={toggleMobileMenu}>
        <Image src={isMobileMenuOpen ? CloseIcon : HamburgerIcon} alt="menu icon" />
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-row md:w-3/5 lg:w-2/5 justify-evenly items-center">
        
        {/* First Dropdown */}
        <div className="relative inline-block text-left" ref={dropdownRefs.desktopFeatures}>
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 text-base text-medium-gray hover:text-almost-black"
            aria-expanded={dropdowns.desktopFeatures}
            aria-haspopup="true"
            onClick={() => toggleDropdown("Features", "desktop")}
          >
            Features
            <Image src={dropdowns.desktopFeatures ? ArrowUp : ArrowDown} className="mt-2" alt="dropdown arrow" />
          </button>

          {dropdowns.desktopFeatures && (
            <div
              className="absolute right-0 z-10 mt-2 rounded-md bg-almost-white shadow-lg ring-2 ring-medium-gray ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
            >
              <div className="py-1" role="none">
                <a href="#" className="flex px-4 py-2 text-sm text-medium-gray hover:text-almost-black w-max" role="menuitem" tabIndex="-1">
                  <span className="pr-2"><Image src={TodoIcon} alt="To do list icon" /></span>To do list
                </a>
                <a href="#" className="flex px-4 py-2 text-sm text-medium-gray hover:text-almost-black w-max" role="menuitem" tabIndex="-1">
                  <span className="pr-2"><Image src={CalendarIcon} alt="Calendar icon" /></span>Calendar
                </a>
                <a href="#" className="flex px-4 py-2 text-sm text-medium-gray hover:text-almost-black w-max" role="menuitem" tabIndex="-1">
                  <span className="pr-2"><Image src={RemindersIcon} alt="Reminders icon" /></span>Reminders
                </a>
                <a href="#" className="flex px-4 py-2 text-sm text-medium-gray hover:text-almost-black w-max" role="menuitem" tabIndex="-1">
                  <span className="pr-2"><Image src={PlanningIcon} alt="Planning icon" /></span>Planning
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Second Dropdown */}
        <div className="relative inline-block text-left" ref={dropdownRefs.desktopCompany}>
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 text-base text-medium-gray hover:text-almost-black"
            aria-expanded={dropdowns.desktopCompany}
            aria-haspopup="true"
            onClick={() => toggleDropdown("Company", "desktop")}
          >
            Company
            <Image src={dropdowns.desktopCompany ? ArrowUp : ArrowDown} className="mt-2" alt="dropdown arrow" />
          </button>

          {dropdowns.desktopCompany && (
            <div
              className="absolute right-0 z-10 mt-2 rounded-md bg-almost-white shadow-lg ring-2 ring-medium-gray ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
            >
              <div className="py-1" role="none">
                <a href="#" className="flex px-4 py-2 text-sm text-medium-gray hover:text-almost-black w-max" role="menuitem" tabIndex="-1">
                  History
                </a>
                <a href="#" className="flex px-4 py-2 text-sm text-medium-gray hover:text-almost-black w-max" role="menuitem" tabIndex="-1">
                  Our Team
                </a>
                <a href="#" className="flex px-4 py-2 text-sm text-medium-gray hover:text-almost-black w-max" role="menuitem" tabIndex="-1">
                  Blog
                </a>
              </div>
            </div>
          )}
        </div>

        <a href="#" className="text-medium-gray hover:text-almost-black">Careers</a>
        <a href="#" className="text-medium-gray hover:text-almost-black">About</a>
      </div>

      <div className="hidden md:flex flex-row md:w-2/5 lg:w-1/5 justify-evenly ml-auto">
        <button className="text-medium-gray hover:text-almost-black">Login</button>
        <button className="text-medium-gray hover:text-almost-black border-2 border-medium-gray hover:border-almost-black px-2.5 py-1.5 rounded-xl">Register</button>
      </div>

    {/* Mobile Menu */}
    <div className={`fixed top-0 right-0 h-full w-2/3 bg-almost-white p-8 transform transition-transform ${
      isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>

      <div className="flex flex-col space-y-4 mt-12">
        {/* First Dropdown for mobile */}
        <div className="relative inline-block text-left" ref={dropdownRefs.mobileFeatures}>
            <button 
              type="button"
              className="inline-flex w-full gap-x-1.5 text-base text-medium-gray hover:text-almost-black"
              id="menu-button"
              aria-expanded={dropdowns.mobileFeatures}
              aria-haspopup="true"
              onClick={() => toggleDropdown("Features", "mobile")}
            >
              Features
              <Image src={dropdowns.mobileFeatures ? ArrowUp : ArrowDown} className="mt-2"/>
            </button>

          {dropdowns.mobileFeatures && (
            <div
              className="relative left-0 z-10 mt-2  rounded-md bg-almost-white shadow-lg ring-2 ring-medium-gray ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button-features"
            >
              <div className="py-1" role="none">
                <a href="#" className="flex px-4 py-2 text-sm text-medium-gray hover:text-almost-black w-max" role="menuitem" tabIndex="-1"
                  id="menu-item-features-0"><span className="pr-2"><Image src={TodoIcon} /></span>To do list</a>
                <a href="#" className="flex px-4 py-2 text-sm text-medium-gray hover:text-almost-black w-max" role="menuitem" tabIndex="-1"
                  id="menu-item-features-1"><span className="pr-2"><Image src={CalendarIcon} /></span>Calendar</a>
                <a href="#" className="flex px-4 py-2 text-sm text-medium-gray hover:text-almost-black w-max" role="menuitem" tabIndex="-1"
                  id="menu-item-features-2"><span className="pr-2"><Image src={RemindersIcon} /></span>Reminders</a>
                <a href="#" className="flex px-4 py-2 text-sm text-medium-gray hover:text-almost-black w-max" role="menuitem" tabIndex="-1"
                  id="menu-item-features-3"><span className="pr-2"><Image src={PlanningIcon} /></span>Planning</a>
              </div>
            </div>
          )}
        </div>

        {/* Second Dropdown for mobile */}
        <div className="relative inline-block text-left" ref={dropdownRefs.mobileCompany}>
            <div>
              <button 
                type="button"
                className="inline-flex w-full gap-x-1.5 text-base text-medium-gray hover:text-almost-black"
                id="menu-button-company"
                aria-expanded={dropdowns.mobileCompany}
                aria-haspopup="true"
                onClick={() => toggleDropdown("Company", "mobile")}
              >
                Company
                <Image src={dropdowns.mobileCompany ? ArrowUp : ArrowDown} className="mt-2"/>
              </button>
            </div>

            {dropdowns.mobileCompany && (
              <div
                className="relative left-0 z-10 mt-2  rounded-md bg-almost-white shadow-lg ring-2 ring-medium-gray ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button-company"
              >
                <div className="py-1" role="none">
                  <a href="#" className="flex px-4 py-2 text-sm text-medium-gray hover:text-almost-black w-max" role="menuitem" tabIndex="-1"
                    id="menu-item-company-0">History</a>
                  <a href="#" className="flex px-4 py-2 text-sm text-medium-gray hover:text-almost-black w-max" role="menuitem" tabIndex="-1"
                    id="menu-item-company-1">Our Team</a>
                  <a href="#" className="flex px-4 py-2 text-sm text-medium-gray hover:text-almost-black w-max" role="menuitem" tabIndex="-1"
                    id="menu-item-company-2">Blog</a>
                </div>
              </div>
            )}
        </div>
        <a href="#" className="text-medium-gray hover:text-almost-black"> Careers </a>
        <a href="#" className="text-medium-gray hover:text-almost-black"> About </a>
        <button className="text-medium-gray hover:text-almost-black">Login</button>
        <button className="text-medium-gray hover:text-almost-black border-2 border-medium-gray hover:border-almost-black px-2.5 py-1.5 rounded-xl">Register</button>
      </div>

    </div>
  </nav>

)}
