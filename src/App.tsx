import { AppProvider } from "./context/AppProvider";
import "./App.css";
import AppRouter from "./routes/Router";

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
