import Home from "./Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { ThemeProvider } from "@mui/material";
import YoutubeTheme from "./common/GlobalTheme";

import Watch from "./components/Watch";
import Profile from "./components/Profile";

function App() {
  return (
    <ThemeProvider theme={YoutubeTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/results" element={<Home/>}/>
          <Route path="/watch" element={<Watch/>}/>
          <Route path="/me" element={<Profile/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
       
  );
}

export default App;
