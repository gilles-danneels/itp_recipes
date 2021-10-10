import query from './query'

const RECIPES_BY_TYPE = `
query ($recipeType: String!){
    allCookbooks(filter: {recipeType: {eq: $recipeType}}) {
      id
      ingredients
      recipeType
      title
      bereidingswijze
      bereidingstijd
      aantalPersonen
    }
  }
`

const ALL_RECIPES = `
  query {
    allCookbooks {
        id
        title
        recipeType
       }
  }
`

const ALL_RECIPE_TYPES = `
  query {
    allRecipeTypes {
      typeName
    }
  }
`

const allRecipeTypes = async () => {
  const result = await query({query: ALL_RECIPE_TYPES})

  return result.allRecipeTypes
}

const allRecipes = async () => {
    const result = await query({query: ALL_RECIPES})

    return result.allCookbooks
}

const recipesByType = async (recipeType) => {
    const result = await query({query: RECIPES_BY_TYPE, variables: { recipeType }})

    return result.allCookbooks
}


export { recipesByType, allRecipes, allRecipeTypes }
