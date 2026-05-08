import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  document.documentElement.setAttribute("data-theme", "dark");
  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
