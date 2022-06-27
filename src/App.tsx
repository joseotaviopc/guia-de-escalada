import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Boulder } from './pages/Boulder';

const client = new ApolloClient({
	uri: 'https://api-sa-east-1.graphcms.com/v2/cl4vs11fg1u0c01ud2d2q83c1/master',
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Boulder />
		</ApolloProvider>
	);
}

export default App;
