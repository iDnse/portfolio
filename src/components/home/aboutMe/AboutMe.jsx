import styles from './AboutMe.module.scss'
import profile from '../../../assets/img/img.png'


function AboutMe() {
  return (
    <>
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.containerImg}>
          <img src={profile} alt="nuevo" />
        </div>
        <div className={styles.containerCard}>
          <h2>Hey!, I’m Pedro Jesus García</h2>
          <article>Frontend Web Developer focused on building fast, responsive, and accessible web applications. I specialize in HTML5, CSS3, JavaScript, and React, with experience turning wireframes into efficient, user-friendly interfaces.</article>
          <div className={styles.containerButton}>
            <button>Contact me</button>
            <button>CV.pdf</button>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}
export default AboutMe