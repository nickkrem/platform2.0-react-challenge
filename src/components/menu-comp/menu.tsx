import Link from "next/link";
import styles from "./menu.module.scss";

export default function Menu() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.homeLink}>
        Home
      </Link>
      <Link href="/breeds" className={styles.breedsLink}>
        Cat Breeds
      </Link>
      <Link href="/favourites" className={styles.favouritesLink}>
        My Favourites
      </Link>
    </nav>
  );
}
