import {ApolloClient, ApolloLink, HttpLink, InMemoryCache} from "@apollo/client";

const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL, // Assurez-vous que cette variable d'environnement est correcte
    credentials: "include",
});

const customLink = new ApolloLink((operation, forward) => {
    return forward(operation).map((response) => {
        return response;
    });
});

const client = new ApolloClient({
    link: ApolloLink.from([customLink, httpLink]),
    cache: new InMemoryCache(),
});

export default client;
