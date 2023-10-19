import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';

import { Provider } from 'react-redux'
import './index.css';
import { store } from './store/store';
import { AppRouter } from './router/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';


const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter />
          <Toaster/>
        </BrowserRouter>
      </Provider>
    </StrictMode>,
  )
};