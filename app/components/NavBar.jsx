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

export default function NavBar(){
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [dropdowns, setDropdowns] = useState({
      features: false,
      company: false,
    });
  
    const dropdownRefs = {
      features: useRef(null),
      company: useRef(null),
    }

    const toggleDropdown = (name) => {
      setDropdowns((prevDropdowns) => {
        const newState = !prevDropdowns[name];
        return {
        ...prevDropdowns,
        [name]: !newState,
        }
      });
    }

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen((prevState) => !prevState);
    };
  
    // this is triggered whenever a mouse clicks occurs anywhere on the document
    const handleClickOutside = (event) => {
      for (const key in dropdownRefs) {
        // dropdownRef.current.contains(event.target) checks if the clicked element is inside the dropdown.
        if (dropdownRefs[key].current && !dropdownRefs[key].current.contains(event.target)){
          setDropdowns((prevDropdowns) => ({
            ...prevDropdowns,
            [key]: false,
          }));
        }
      };
    }
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);

      return () => { //optional clean up function that removes the event listener
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
  return (
  <nav className="bg-transparent m-4 flex flex-row justify-between">

   <Image className="flex-none shrink-0 object-contain" src={Logo} alt="" /> {/* Assuming Logo is imported and defined */}      
      
    {/* Hamburger icon for mobile */}
    <button className="md:hidden z-50" onClick={toggleMobileMenu}>
      <Image src={isMobileMenuOpen ? CloseIcon : HamburgerIcon} alt="menu icon" />
    </button>

    {/* Desktop Menu */}
    <div className="hidden md:flex flex-row md:w-3/5 lg:w-2/5 justify-evenly items-center">
        
        {/* First Dropdown */}
        <div className="relative inline-block text-left" ref={dropdownRefs.features}>
          <button 
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 text-base text-medium-gray hover:text-almost-black"
            id="menu-button"
            aria-expanded={dropdowns.features}
            aria-haspopup="true"
            onClick={() => toggleDropdown('features')}
          >
            Features
            <Image src={dropdowns.features ? ArrowUp : ArrowDown} className="mt-2"/>
          </button>

        {dropdowns.features && (
          <div
            className="absolute right-0 z-10 mt-2  rounded-md bg-almost-white shadow-lg ring-2 ring-medium-gray ring-opacity-5 focus:outline-none"
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

        {/* Second Dropdown */}
        <div className="relative inline-block text-left" ref={dropdownRefs.company}>
          <div>
            <button 
              type="button"
              className="inline-flex w-full justify-center gap-x-1.5 text-base text-medium-gray hover:text-almost-black"
              id="menu-button-company"
              aria-expanded={dropdowns.company}
              aria-haspopup="true"
              onClick={() => toggleDropdown('company')}
            >
              Company
              <Image src={dropdowns.company ? ArrowUp : ArrowDown} className="mt-2"/>
            </button>
          </div>

          {dropdowns.company && (
            <div
              className="absolute right-0 z-10 mt-2  rounded-md bg-almost-white shadow-lg ring-2 ring-medium-gray ring-opacity-5 focus:outline-none"
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
    </div>
  
    <div className="hidden md:flex flex-row md:w-2/5 lg:w-1/5 justify-evenly ml-auto">
      <button className="text-medium-gray hover:text-almost-black">Login</button>
      <button className="text-medium-gray hover:text-almost-black border-2 border-medium-gray hover:border-almost-black px-2.5 py-1.5 rounded-xl">Register</button>
    </div>

    {/* Mobile Menu */}
    <div className={`fixed top-0 right-0 h-full w-2/3 bg-almost-white p-8 transform transition-transform ${
      isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>

    <div className="flex flex-col space-y-4 mt-12">
      {/* Dropdowns for mobile */}
      <div className="relative inline-block text-left" ref={dropdownRefs.features}>
          <button 
            type="button"
            className="inline-flex w-full gap-x-1.5 text-base text-medium-gray hover:text-almost-black"
            id="menu-button"
            aria-expanded={dropdowns.features}
            aria-haspopup="true"
            onClick={() => toggleDropdown('features')}
          >
            Features
            <Image src={dropdowns.features ? ArrowUp : ArrowDown} className="mt-2"/>
          </button>

        {dropdowns.features && (
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

        {/* Second Dropdown */}
        <div className="relative inline-block text-left" ref={dropdownRefs.company}>
          <div>
            <button 
              type="button"
              className="inline-flex w-full gap-x-1.5 text-base text-medium-gray hover:text-almost-black"
              id="menu-button-company"
              aria-expanded={dropdowns.company}
              aria-haspopup="true"
              onClick={() => toggleDropdown('company')}
            >
              Company
              <Image src={ArrowDown} className="mt-2"/>
            </button>
          </div>

          {dropdowns.company && (
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
