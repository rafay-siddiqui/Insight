import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import AuthProvider from './providers/AuthProvider';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

ReactDOM.render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </AuthProvider>,
  document.getElementById('root')
);


