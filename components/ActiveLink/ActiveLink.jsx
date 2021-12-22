import { useRouter } from 'next/router'
import styles from './ActiveLink.module.css'

function ActiveLink({ children, href }) {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${styles.navLink}  ${
        router.asPath === href ? styles.activeLink : ''
      }`}
    >
      {children}
    </a>
  )
}

export default ActiveLink
