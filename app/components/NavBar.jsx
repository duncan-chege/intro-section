"use client";

import Image from "next/image"
import Logo from "../../public/images/logo.svg"
import CalendarIcon from "../../public/images/icon-calendar.svg"
import PlanningIcon from "../../public/images/icon-planning.svg"
import RemindersIcon from "../../public/images/icon-reminders.svg"
import TodoIcon from "../../public/images/icon-todo.svg"

import { useState, useEffect, useRef } from "react";

export default function NavBar(){
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    }
  
    // this is triggered whenever a mouse clicks occurs anywhere on the document
    const handleClickOutside = (event) => {

      // dropdownRef.current.contains(event.target) checks if the clicked element is inside the dropdown.
      if( !dropdownRef.current.contains(event.target)){
        setIsOpen(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);

      return () => { //optional clean up function that removes the event listener
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
  return (
  <nav className="bg-transparent m-8 flex flex-row justify-between">
    <Image className="flex-none shrink-0" src={Logo} alt="" />
    <div className="flex flex-row w-2/5 justify-evenly">
      <div className="relative inline-block text-left" ref={dropdownRef}>
        <div>
          <button 
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 text-base text-gray-900"
            id="menu-button"
            aria-expanded={isOpen}
            aria-haspopup="true"
            onClick={toggleDropdown} > Features
            
            <svg 
              className="-ml-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true" >
              <path fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd" />
            </svg>
          </button>
        </div>

  {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-2 ring-medium-gray ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button" >

        <div className="py-1" role="none">
            <a href="#" className="flex px-4 py-2 text-sm text-medium-gray w-max" role="menuitem" tabIndex="-1"
              id="menu-item-0"><span className="pr-2"><Image src={TodoIcon} /></span>To do list</a>
            <a href="#" className="flex px-4 py-2 text-sm text-medium-gray w-max" role="menuitem" tabIndex="-1"
              id="menu-item-1"><span className="pr-2"><Image src={CalendarIcon} /></span>Calendar</a>
            <a href="#" className="flex px-4 py-2 text-sm text-medium-gray w-max" role="menuitem" tabIndex="-1"
              id="menu-item-2"><span className="pr-2"><Image src={RemindersIcon} /></span>Reminders</a>
            <a href="#" className="flex px-4 py-2 text-sm text-medium-gray w-max" role="menuitem" tabIndex="-1"
              id="menu-item-2"><span className="pr-2"><Image src={PlanningIcon} /></span>Planning</a>
          </div>
        </div>
      )}
      </div>

      <p className="font-sans"> Company </p>
      <p> Careers </p>
      <p> About </p>
    </div>
    <div className="flex flex-row w-1/5 justify-evenly ml-auto">
      <p>Login</p>
      <p>Register</p>
    </div>
  </nav>

)}
