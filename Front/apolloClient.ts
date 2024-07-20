import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";

const apiUri = "http://localhost:4000/graphql";

const client = new ApolloClient({
    link: new HttpLink({
        uri: apiUri,
    }),
    cache: new InMemoryCache(),
});

export default client;
