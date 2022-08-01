import "./App.css";
import Home from './Components/Home'
import Plan from './Components/Plan'
import WorkspaceName from './Components/WorkspaceName'
import {
  Routes,
  Route,
} from "react-router-dom";
import LaunchEden from "./Components/LaunchEden";

function App() {
  return (
        <Routes>
          <Route path ="/WorkspaceName" element={<WorkspaceName />} />
          <Route path ="/Plan" element={<Plan />} />
          <Route path ="/LaunchEden" element={<LaunchEden />} />
          <Route path="/CutShort" element={<Home />} />
        </Routes>
  );
}

export default App;
