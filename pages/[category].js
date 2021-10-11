import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Category.module.css'
import { allRecipes, recipesByType } from "../lib/api"
import Link from 'next/link'

const CategoryDishes = ({ recipes }) => {
  const router = useRouter()
  const { category } = router.query


  return (
    <>
      <div className={styles.wrapper_ingredients_page}>
        <div className={styles.ontent_recipes}>
          <h1 className={styles.title}>{category} recipes</h1>
          <div className={styles.container}>
            {recipes.map((recipe) => (
              <div className={styles.recipe_card}>
                <h1 className={styles.recipe_title}>{recipe.title}</h1>
                <div className={styles.info}>
                  <p><FontAwesomeIcon icon={faClock} /> {recipe.bereidingstijd} min</p>
                  <p><FontAwesomeIcon icon={faUser} /> {recipe.aantalPersonen} personen</p>
                </div>
                <div className={styles.ingredients}>
                  <div>
                    <h1>Ingrediënten</h1>
                    <p>
                      {recipe.ingredients}
                    </p>
                  </div>
                </div>
                <div className={styles.prep_desc}>
                  <div>
                    <h1>Bereidingswijze</h1>
                    <p>
                      {recipe.bereidingswijze}
                    </p>
                  </div>
                </div>
              </div>
            ))
            }
            
          </div>
        </div>
      </div>
      <div className={styles.home_btn}>
              <a href="/"><FontAwesomeIcon icon={faHome} className={styles.home_icon}/></a>
            </div>
    </>
  )
}

export async function getStaticPaths() {
  const recipes = await allRecipes()

  const paths = recipes.map(recipe => `/${recipe.recipeType}`)
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const recipes = await recipesByType(params.category)

  return { props: { recipes } }
}

export default CategoryDishes


