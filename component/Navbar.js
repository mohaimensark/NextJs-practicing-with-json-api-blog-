import React from 'react'
import styles from "@/styles/Home.module.css";
import Link from "next/link";

function Navbar() {
  return (
    <nav className={styles.mainnav}>
    <ul>
      <Link legacyBehavior href='/'><a><li>Home</li></a></Link>
      <Link legacyBehavior href='/about'><a><li>About</li></a></Link>
      <Link legacyBehavior href='/blog'><a><li>Blog</li></a></Link>
      <Link legacyBehavior href='/contact'><a><li>Contact</li></a></Link>
      
    </ul>
  </nav>
  )
}

export default Navbar
