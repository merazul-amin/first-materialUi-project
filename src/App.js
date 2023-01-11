import './App.css';
import { RouterProvider } from "react-router-dom";
import routes from './Routes/Routes';
import { ThemeProvider } from '@mui/system';
function App() {
  return (
    <ThemeProvider >
      <div>
        <RouterProvider router={routes}>

        </RouterProvider>
      </div>
    </ThemeProvider>

  );
}

export default App;
