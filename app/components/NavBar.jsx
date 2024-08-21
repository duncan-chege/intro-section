"use client";

import Image from "next/image"
import Logo from "../../public/images/logo.svg"
import CalendarIcon from "../../public/images/icon-calendar.svg"
import PlanningIcon from "../../public/images/icon-planning.svg"
import RemindersIcon from "../../public/images/icon-reminders.svg"
import TodoIcon from "../../public/images/icon-todo.svg"
import ArrowDown from "../../public/images/icon-arrow-down.svg"


import { useState, useEffect, useRef } from "react";

export default function NavBar(){
    const [dropdowns, setDropdowns] = useState({
      features: false,
      company: false,
    });
  
    const dropdownRefs = {
      features: useRef(null),
      company: useRef(null),
    }

    const toggleDropdown = (name) => {
      setDropdowns((prevDropdowns) => ({
        ...prevDropdowns,
        [name]: !prevDropdowns[name],
      }));
    }

  
    // this is triggered whenever a mouse clicks occurs anywhere on the document
    const handleClickOutside = (event) => {
      for (const key in dropdownRefs) {
        // dropdownRef.current.contains(event.target) checks if the clicked element is inside the dropdown.
        if( !dropdownRefs[key].current.contains(event.target)){
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
   <Image className="flex-none shrink-0" src={Logo} alt="" /> {/* Assuming Logo is imported and defined */}      
      <div className="flex flex-row w-2/5 justify-evenly">
        
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
            <Image src={ArrowDown} className="mt-2"/>
          </button>

        {dropdowns.features && (
          <div
            className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-2 ring-medium-gray ring-opacity-5 focus:outline-none"
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
              <Image src={ArrowDown} className="mt-2"/>
            </button>
          </div>

          {dropdowns.company && (
            <div
              className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-2 ring-medium-gray ring-opacity-5 focus:outline-none"
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
  
    <div className="flex flex-row w-1/5 justify-evenly ml-auto">
      <button className="text-medium-gray hover:text-almost-black">Login</button>
      <button className="text-medium-gray hover:text-almost-black border-2 border-medium-gray hover:border-almost-black px-2.5 py-1.5 rounded-lg">Register</button>
    </div>
  </nav>

)}
