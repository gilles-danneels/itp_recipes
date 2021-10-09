import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper_front_page} >
        <div className={styles.content_wrapper}>
        <div className={styles.upper_part}>
          <h1>Recepten</h1>
          <p>By Gilles Danneels</p>
        </div>
        <div className={styles.lower_part}>
          <a href="#catergory"><button className={styles.read_more_btn}>Lees meer</button></a>
        </div>
       </div>
      </div>

      <div id="catergory" className={styles.category_page} $>
        <h1>Categories</h1>
        <div className={styles.category_types}>
          <Link href="/vegan">
            <div className={styles.wrapper_category_card}>
              <div  className={`${styles["category_card"]} ${styles["vegan_category_card"]}`}>
                <h2>Vegan recipes</h2>
              </div>
            </div>
          </Link>
          <Link href="/veggie">
            <div className={styles.wrapper_category_card}>
              <div  className={`${styles["category_card"]} ${styles["veggie_categroy_card"]}`}>
                <h2>Veggie recipes</h2>
              </div>
            </div>
          </Link>
          <Link href="/meat">
            <div className={styles.wrapper_category_card}>
              <div  className={`${styles["category_card"]} ${styles["meat_categroy_card"]}`}>
              <h2>Meat recipes</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
    
    
    
  )
}

export default Home
