import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { allRecipeTypes } from "../lib/api"

const Home = ({ types }) => {
  return (
    <div className={styles.container}>
      {console.log(types)}
      <div className={styles.wrapper_front_page} >
        <div className={styles.content_wrapper}>
          <div className={styles.upper_part}>
            <h1>Best recipes</h1>
            <p>By Gilles Danneels</p>
          </div>
          <div className={styles.lower_part}>
            <a href="#catergory"><button className={styles.read_more_btn}>Read more</button></a>
          </div>
        </div>
      </div>

      <div id="catergory" className={styles.category_page} $>
        <div className={styles.wrapper_category_page_content}>
          <h1>Categories</h1>
          <div className={styles.category_types}>
            {
              types.map(type => (
                <Link href={`/${type.typeName}`} key={`${type.typeName}`}>
                  <div className={styles.wrapper_category_card}>
                    {console.log(type.typeName)}
                    <div className={`${styles["category_card"]} ${styles[`${type.typeName}_category_card`]}`}>
                      <h2>{type.typeName} recipes</h2>
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>

      </div>
    </div>



  )
}

export async function getStaticProps() {
  const types = await allRecipeTypes()

  return { props: { types } }
}

export default Home
