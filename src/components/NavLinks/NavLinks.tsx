'use client';

import Link from "next/link";
import style from './NavLinks.module.css';
import { usePathname } from "next/navigation";


interface Props {
    path:string;
    text:string;
}

export const NavLinks = ({path, text}:Props) => {

  const pathName = usePathname()  

  return (
    <Link className={`${style.link} ${ (pathName === path) && style['active-link']} text-xl font-semibold`} href={path}>
      {text}                    
    </Link>
  )
}

