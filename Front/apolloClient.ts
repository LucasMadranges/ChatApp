import {ApolloClient, ApolloLink, HttpLink, InMemoryCache} from "@apollo/client";

// Custom link to dynamically set the URI
const customLink = new ApolloLink((operation, forward) => {
    const isMutation = operation.query.definitions.some(
        (definition) => definition.kind === "OperationDefinition" && definition.operation === "mutation",
    );

    const uri = isMutation ? "http://localhost:4000/graphql" : "http://nestjs-api:4000/graphql";

    const httpLink = new HttpLink({uri, credentials: "include"});

    return httpLink.request(operation, forward);
});

const client = new ApolloClient({
    link: customLink,
    cache: new InMemoryCache(),
});

export default client;