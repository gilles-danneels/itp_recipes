import { useRouter  } from "next/router";
import styles from '../styles/Category.module.css'


const CategoryDishes = () => {
    const router = useRouter()
    const { category } = router.query

    return(
        <>
          <h1>Type: {category}</h1>
        </>
    )
    
}

export default CategoryDishes