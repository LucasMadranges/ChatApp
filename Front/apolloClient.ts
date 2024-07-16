// apolloClient.js
import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    link: new HttpLink({
        uri: `${process.env.API_URL}/graphql`,
    }),
    cache: new InMemoryCache(),
});

export default client;
