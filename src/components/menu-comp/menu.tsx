"use client";

import Link from "next/link";
import styles from "./menu.module.scss";
import { usePathname } from "next/navigation";
import { MENU_PROPS } from "@/lib/types";
import { useState } from "react";

export default function Menu({ tabs }: MENU_PROPS) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* First menu is for mobile Devices */}
      <nav className="sidebar">
        {!isMenuOpen && (
          <span className="mobileMenuBtn" onClick={() => setIsMenuOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26px"
              viewBox="0 -960 960 960"
              width="26px"
              fill="#fff"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </span>
        )}
        {isMenuOpen && (
          <ul>
            <li
              key="closeIcon"
              className="mobileMenuBtn"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26px"
                viewBox="0 -960 960 960"
                width="26px"
                fill="#fff"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </li>
            {tabs.map((tab) => {
              const isActive = pathname === tab.href;
              let classLink = styles.homeLink;
              if (tab.href === "/breeds") classLink = styles.breedsLink;
              if (tab.href === "/favourites") classLink = styles.favouritesLink;

              return (
                <li key={tab.href} className={`${classLink}`}>
                  <Link
                    href={tab.href}
                    className={`${isActive && styles.isActive}`}
                  >
                    {tab.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
      {/* Second menu is for desktop and table Devices */}
      <nav className={styles.nav}>
        <ul>
          {tabs.map((tab) => {
            const isActive = pathname === tab.href;
            let classLink = styles.homeLink;
            if (tab.href === "/breeds") classLink = styles.breedsLink;
            if (tab.href === "/favourites") classLink = styles.favouritesLink;

            return (
              <li key={tab.href} className={`${classLink}`}>
                <Link
                  href={tab.href}
                  className={`${isActive && styles.isActive}`}
                >
                  {tab.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
