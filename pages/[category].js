import { useRouter  } from "next/router";
import styles from '../styles/Category.module.css'

const CategoryDishes = ({data}) => {
    const router = useRouter()
    const { category } = router.query


    return(
        <>
          <div className={styles.wrapper_ingredients_page}>
            <div className={styles.ontent_recipes}>
             <h1 className={styles.title}>{category} recipes</h1>
             <div className={styles.container}>
              {/* load data from datocms */}
              <div className={styles.recipe_card}>

              </div>
              <div className={styles.recipe_card}>

              </div>

              
             </div>
            </div>
          </div>
        </>
    )
    
}

export default CategoryDishes