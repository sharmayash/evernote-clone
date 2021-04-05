import "./App.css";
import { Provider } from "react-redux";

// Importing app files
import store from "../redux/store";
import Routes from "../components/common/routes";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
