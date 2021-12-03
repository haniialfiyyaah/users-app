import HeadTitle from '../components/HeadTitle'
import Logo from '../components/Logo'
import Stepper from '../components/Progress'
import CreateAccount from '../components/Steps/CreateAccount'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <HeadTitle />

      <main className={styles.main}>
        <Logo />
        <Stepper />
        <CreateAccount />
        {/* STEP */}
      </main>
    </div>
  )
}

export default Home
