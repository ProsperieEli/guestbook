import { render } from 'react-dom';
import App from './App';
import { UserProvider } from './context/userContext';

render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById('root')
);
