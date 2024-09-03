"use client";

import Link from "next/link";
import styles from "./desktopMenu.module.scss";
import { DEVICES_MENU_PROPS } from "@/lib/types";
import { LinkButton } from "../link-button/linkButton";

export default function DesktopMenu({ tabs, pathname }: DEVICES_MENU_PROPS) {
  return (
    <nav className={styles.nav}>
      <ul>
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          let classLink = styles.homeLink;
          if (tab.href === "/breeds") classLink = styles.breedsLink;
          if (tab.href === "/favourites") classLink = styles.favouritesLink;

          return (
            <li key={tab.href} className={`${classLink}`}>
              {/* We need to do the following trick in order to invalidate client cache
                on favourites page. We manually opt out of client caching by using our own LinkButton
                component. Also see LinkButton component... We need to do this because revalidating
                "/favourites" route when adding ain image to favourites invalidates all routes client 
                cache and not just the "favourites" route.
              */}
              {tab.href === "/favourites" ? (
                <LinkButton
                  href="/favourites"
                  className={`${isActive && styles.isActive}`}
                >
                  {tab.title}
                </LinkButton>
              ) : (
                <Link
                  href={tab.href}
                  className={`${isActive && styles.isActive}`}
                >
                  {tab.title}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
