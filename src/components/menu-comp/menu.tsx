"use client";

import Link from "next/link";
import styles from "./menu.module.scss";
import { usePathname } from "next/navigation";
import { MENU_PROPS } from "@/lib/types";
import MobileMenu from "../mobile-menu/mobileMenu";
import DesktopMenu from "../desktop-menu/desktopMenu";

export default function Menu({ tabs }: MENU_PROPS) {
  const pathname = usePathname();

  return (
    <>
      {/* First menu is for mobile Devices */}
      <MobileMenu tabs={tabs} pathname={pathname} />
      {/* Second menu is for desktop and table Devices */}
      <DesktopMenu tabs={tabs} pathname={pathname} />
    </>
  );
}
