import ThemeProvider from "./components/themeProvider.tsx";
import Home from "./pages/home/home.tsx";
import "./styles/global.css.ts";

function App() {
  return (
    <>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
