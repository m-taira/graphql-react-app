import React from 'react'
import client from './client'
import { ApolloProvider } from 'react-apollo'
import { Query } from 'react-apollo'
import { ME } from './graphql'

function App() {
  return (
    <ApolloProvider client={client}>
      <div>Hello, GraphQL</div>

      <Query query={ME}>
        {
          ({ loading, error, data }) => {
            if (loading) return 'Loadin...'
            if (error) return `Error: ${error.messsage}`
            console.log(data)
            return <div>{data.user.name}</div>
          }
        }
      </Query>
    </ApolloProvider>
  )
}

export default App
