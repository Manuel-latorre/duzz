"use client";


import React, { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import Image from "next/image";
import duzz from '../../app/images/duzz.png'
import { NavLinks } from "../NavLinks/NavLinks";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {path: '/solutions', text: 'Solutions'},
    {path: '/portfolio', text: 'Portfolio'},
    {path: '/about-us', text: 'About us'},
    {path: '/contact', text: 'Contact'},

]

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="flex items-center w-full h-[100px]">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
            {/* <div className="flex items-end mt-4">
                <h1 className="font-semibold text-8xl">d</h1>
                <svg className="blink-animation" width={60} height={20} fill="#00FF66" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M501.333,96H10.667C4.779,96,0,100.779,0,106.667v298.667C0,411.221,4.779,416,10.667,416h490.667 c5.888,0,10.667-4.779,10.667-10.667V106.667C512,100.779,507.221,96,501.333,96z"></path> </g> </g> </g></svg>
            </div> */}
            <Image width={150} height={150} src={duzz} alt="duzz icon"/>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {
            navLinks.map((link) => (
                <NavLinks key={link.text} {...link}/> //* spread operator para pasar las props si cumple con todas *//
            ))
        }
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button size="sm" variant="bordered" className="flex items-center">
            EN
          </Button>
        </NavbarItem>
        <NavbarItem>
        <Button size="sm" variant="bordered" className="flex items-center">
            ES
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
      {
            navLinks.map((link) => (
                <NavLinks key={link.text} {...link}/> //* spread operator para pasar las props si cumple con todas *//
            ))
        }
      </NavbarMenu>
    </Navbar>
  );
}
