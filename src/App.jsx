import "./App.css";

import AuthContextProvider from "./context/AuthContent";
import MainComp from "./MainComp";

function App() {
  return (
      <AuthContextProvider>
        <MainComp />
      </AuthContextProvider>
  );
}

export default App;
