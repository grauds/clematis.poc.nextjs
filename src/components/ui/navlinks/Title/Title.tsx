'use client'
import Link from 'next/link'

import styles from "./title.module.css";

export function Title() {
  return (
      <Link href={`/`} className={styles.title}>
        <div className={styles.brand}>images_viewer</div>
      </Link>
  );
}
