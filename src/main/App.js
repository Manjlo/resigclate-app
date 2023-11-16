import RouteHandler from '../components/router/RouteHandler';
import '../main/App.css'
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <RouteHandler/>    
    </Provider>
  );
}

export default App;
