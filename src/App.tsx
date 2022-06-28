import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

const client = new ApolloClient({
	uri: 'https://api-sa-east-1.graphcms.com/v2/cl4vs11fg1u0c01ud2d2q83c1/master',
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</ApolloProvider>
	);
}

export default App;
