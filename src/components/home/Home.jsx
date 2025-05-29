import styles from './Home.module.scss'
import profile from '../../assets/img/img.png'


function Home() {
  return (
    <>
    <section className={styles.section}>
      {/* <img src={profile} alt="nuevo" /> */}
      <div>
      <h2>Hey!, I’m Pedro Jesus García</h2>
      <article>Frontend Web Developer focused on building fast, responsive, and accessible web applications. I specialize in HTML5, CSS3, JavaScript, and React, with experience turning wireframes into efficient, user-friendly interfaces.</article>
      <div>
        <button>Contact me</button>
        <button>CV.pdf</button>
      </div>
      </div>
    </section>
    </>
  )
}
export default Home