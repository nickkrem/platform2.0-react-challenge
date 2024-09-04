"use client";
import { useRouter } from "next/navigation";
import styles from "./linkButton.module.scss";

//A helper link to replace nextJS Link Component
//This link button navigates the router to the specified destination
//and invalidates client caching for the specific page, by using
//router.refresh
export function LinkButton({
  children,
  href,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  href: string;
  className?: string | undefined;
}) {
  const router = useRouter();
  return (
    <a
      onClick={() => {
        router.push(href);
        router.refresh();
      }}
      className={`${className} ${styles.linkButton}`}
      {...props}
    >
      {children}
    </a>
  );
}
