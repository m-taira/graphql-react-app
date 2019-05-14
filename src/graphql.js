import gql from 'graphql-tag'

export const ME = gql`
  query me{ 
    user(login: "c-taira") {
      name
      avatarUrl
    }
  }
`
