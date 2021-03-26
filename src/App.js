import HomePage from './HomePage/HomePage';
import GlobalState from "./global/GlobalState";

function App() {
  return (
    <GlobalState>
      <HomePage />
    </GlobalState>
  );
}

export default App;
