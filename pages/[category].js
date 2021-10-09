import { useRouter  } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons'
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
                <h1>Steak tartaar met frietjes</h1>
                <div className={styles.info}>
                    <p><FontAwesomeIcon icon={faClock} /> 60 min</p>
                    <p><FontAwesomeIcon icon={faUser} /> 4 personen</p>
                </div>
                <div className={styles.ingredients}>
                  <div>
                    <h1>Ingrediënten</h1>
                    <p>
                      frietaardappelen 1kg, rund (pelee royale of bavette) 600g, sjalot 1, 
                      een flinke scheut dragonazijn, peterselie 1 bussel, kappertjes 2 koffielepels, 
                      augurken (klein) enkele, Tabasco enkele druppels, worcestersaus enkele druppels, 
                      mayonaise 1 eetlepel, ketchup 1 eetlepel, peper en zout, dragon enkele takjes, kropsla 
                      enkele blaadjes
                    </p>
                  </div>
                </div>
                <img ></img>
                <div className={styles.prep_desc}>
                  <div>
                    <h1>Bereidingswijze</h1>
                    <p>
                      1. Verwarm de friteuse voor op 145°C.
                      2. Schil de aardappelen, snij ze tot frieten en spoel ze met water. Laat ze kort uitlekken op een handdoek.
                      3. Pocheer de frietjes in de friteuse tot ze gaar zijn. Laat ze nadien even afkoelen in de diepvriezer. Verhoog de temperatuur van de friteuse naar 175°C.
                      4. Snijd het vlees eerst in plakjes en daarna heel fijn met 2 messen.
                      5. Pel de sjalot en snipper één helft fijn. Snijd de andere helft in ringetjes voor de sla. Leg de ringetjes in een kom met dragonazijn en laat even trekken. Voeg de versnipperde sjalot toe aan het fijngemalen vlees.
                      6. Hak ¼ van de bussel peterselie fijn. Snijd de kappertjes en de augurkjes fijn. Voeg toe aan het vlees.
                      7. Breng het vlees op smaak met tabasco, worcestersaus, de mayonaise en de ketchup. Begin steeds met een eetlepel en bouw zo verder op. Kruid met peper en zout en meng de tartaar. Laat de tartaar even rusten in de koelkast.
                      8. Snijd  ¼ van de bussel peterselie en de dragon fijn en voeg toe aan de ringetjes sjalot.
                      9. Spoel de kropsla in koud water, zwier uit en meng onder de rest van de salade.
                      10. Haal de frieten uit de diepvriezer en bak de frieten krokant in de hete friteuse.
                      11. Serveer de steak tartaar met de kappertjes, de frieten en de salade.
                    </p>
                  </div>
                </div>
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