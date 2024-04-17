import Link from "next/link";
import React from "react";
import styled from "./Navbar.module.scss"
import DarkModeToLight from "../DarkModeToLightMode/DarkModeToLightMode"

export default function Navbar() {
  const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Posts",
    url: "/blog",
  },
  {
    id: 3,
    title: "about us",
    url: "/about",
  },
  {
    id: 4,
    title: "Contact us",
    url: "contact",
  },
];
  return (
    <div className={styled.container}>
      <Link href="/" className={styled.logo}>
        Home
      </Link>
      <div className={styled.Navbar}>
          <DarkModeToLight/>
        {links.map((item) => (
          <Link key={item.id} href={item.url}>
            {item.title}
          </Link>
        ))}
      
      </div>
    </div>
  );
}
