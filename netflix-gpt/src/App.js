import Body from "./Components/Body"
import './App.css';
import { Provider } from "react-redux";
import appstore from "./Utils/appStore";

function App() {
  return (
    <Provider store={appstore}>
      <Body />
    </Provider>
  );
}

export default App;
