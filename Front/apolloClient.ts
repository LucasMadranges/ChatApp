import {ApolloClient, ApolloLink, HttpLink, InMemoryCache} from "@apollo/client";

// Custom link to dynamically set the URI
const customLink = new ApolloLink((operation, forward) => {
    const uri = "http://nestjs-api:4000";

    const httpLink = new HttpLink({uri, credentials: "include"});

    return httpLink.request(operation, forward);
});

const client = new ApolloClient({
    link: customLink,
    cache: new InMemoryCache(),
});

export default client;