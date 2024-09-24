'use client'
 
import { Title } from './Title'
import styles from './nav-links.module.css'
 
export function NavLinks() {

  return (
    <div className={styles.header}>
      <nav className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Title /> 
      </nav>
    </div>
  )
}