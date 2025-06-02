import styles from './Home.module.scss'
import TechTicker from './techTicker/TechTicker'
import AboutMe from './aboutMe/AboutMe'

function Home() {
  return (
    <>
    <section>
      <div>
        <AboutMe />
      </div>
      <div>
        <TechTicker />
      </div>
    </section>

    </>
  )
}
export default Home