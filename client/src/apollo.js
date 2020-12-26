import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: "https://hoonsmovieql.now.sh"
});

export default client;

