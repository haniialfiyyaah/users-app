import Image from 'next/image'
import styles from './styles/Logo.module.css'

const Logo = () => {
  return (
    <h1 className={styles.title}>
      <Image src="/images/Logo.png" alt="Tomei Logo" width={150} height={45} />
    </h1>
  )
}

export default Logo
