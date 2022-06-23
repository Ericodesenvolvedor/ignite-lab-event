import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oinoyx05rz01xt6qovd9qg/master',
    cache: new InMemoryCache()
})