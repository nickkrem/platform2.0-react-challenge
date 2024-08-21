import ImageList from "@/components/image-list-comp/imageList";
import styles from "./page.module.scss";

export default async function Home() {
  return (
    <>
      <h2 className={styles.title}>Check out our cat images</h2>
      <section className={styles.section}>
        <ImageList />
      </section>
    </>
  );
}
