import { Provider } from "react-redux";
import store from "config/redux/store";
import { Router } from './routes';

function App() {
  return (
    <Provider store={store()}>
      <Router />
    </Provider>
  );
}

export default App;
