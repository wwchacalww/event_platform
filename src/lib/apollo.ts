import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o3mfov0dyc01xi41bwbtv6/master",
  cache: new InMemoryCache(),
});
