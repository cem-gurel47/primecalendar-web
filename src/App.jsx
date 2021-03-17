import Routes from "./services/routes.js";
import { ThemeProvider } from "styled-components";
import Theme from "./presentation/theme/mainTheme.js";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
