import { GraphQLClient } from 'graphql-request'

const query = async ({ query, variables }) => {
  const endpoint = 'https://graphql.datocms.com/preview'

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: 'Bearer 362296f2603ff38a49f604c5b2b6e6'
    }
  })

  return client.request(query, variables)
}

export default query