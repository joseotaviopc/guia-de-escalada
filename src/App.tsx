import { ApolloProvider } from '@apollo/client';
import { AppRoutes } from "./routes/Router";
import { client } from './lib/apollo';

function App() {
	return (
		// ThemeProvider
		// Toaster
		<ApolloProvider client={client}>
				<AppRoutes />
		</ApolloProvider>
	);
}

export default App;
