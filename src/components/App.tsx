import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Header from './Header';
import Search from './Search';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Search />
    </QueryClientProvider>
  );
}

export default App;
