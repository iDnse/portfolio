import styles from './Header.module.scss';

const Header = () => {
  return (
    <>
      <header className={styles.containerHeader} >
        <nav className={styles.navbar}>
          <h1 className={styles.title}>Dnseweb</h1>
            <div className={styles.navbarLink}>
              <ul className={styles.link}>
                <li><a href="#home">Home</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contactMe">Contact me</a></li>
                <li><a href="#certificates">Certificates</a></li>
              </ul>
              <span  className={styles.traslate}>English</span>
             </div>
        </nav>
      </header>
    </>
  )
}
export default Header